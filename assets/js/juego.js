(() => {
    'use strict';
    let dec = [];
    let tipos = ['C','D','H','S'];
    let especial = ['A','J','Q','K'];
    const btnPedir = document.getElementById('btnPedir');
    const btnDetener = document.querySelector('#btnDetener')
    const btnNuevo = document.querySelector('#btnNuevo')
    const puntuajeJugador = document.querySelectorAll('small');
    const divJuadorCartas = document.querySelector('#jugador-cartas');
    const divPcCartas = document.querySelector('#computadora-cartas');
    const score = document.querySelector('#score-player');
    let scoreJugador = 0;
    let puntosJugador = 0,
        puntosPc = 0;
    
    document.addEventListener('DOMContentLoaded', () => {
        let v = localStorage.getItem('score');
        console.log(v);
        if(v){
            scoreJugador = v;
            score.innerText = scoreJugador;
        }
    })
    
    const crearBaraja = () => {
        for(let i = 2; i <= 10; i++){
            for(let tipo of tipos){
                dec.push(i+tipo);
            }
        }
        for(let tipo of tipos){
            for(let esp of especial){
                dec.push(esp+tipo);
            }
        }
        dec = shuffle(dec);
        return dec;
    }
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    
    crearBaraja();
     
    const pedirCarta = () => {
        if(dec.length === 0){
            throw 'No hay cartas en la baraja'
        }
        const carta = dec.pop();
        // console.log(dec);
        // console.log(carta);
        return carta;
    }
    
    const valorCarta = (carta) => {
     let valor = carta.substring(0,carta.length - 1);
     return (isNaN(valor)) ? (valor === 'A')? 11 : 10: Number(valor) ;
    }
    
    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosPc+= valorCarta(carta);
            puntuajeJugador[1].innerText = puntosPc;
            // console.log(puntosPc);
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta')
            divPcCartas.append(imgCarta)
        }while(puntosMinimos <=21 && puntosPc <=21 && puntosPc-puntosJugador <= 0);
        
        if(puntosJugador > 21){
            scoreJugador = 0;
        }else if(puntosJugador == 21 && puntosPc != 21){
            scoreJugador++;
        }else if( puntosJugador < 21 && puntosPc < 21){
            if((21-puntosJugador) < (21-puntosPc)){
                scoreJugador++;
            }else{
                scoreJugador = 0;
            }
        }else if(puntosJugador < 21 && puntosPc > 21){
            scoreJugador++;
        }else if(puntosJugador < 21 && puntosPc  == 21){
            scoreJugador = 0;
        }
        
        score.innerText = scoreJugador;
        console.log(scoreJugador);
    }

    function verificarPuesto(score) { 
        window.location.href = "top-v.php?score=" + score; 
      }
      
    
    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador+= valorCarta(carta);
        puntuajeJugador[0].innerText = puntosJugador;
        console.log(puntosJugador);
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')
        divJuadorCartas.append(imgCarta)
    
        if(puntosJugador > 21){
            btnPedir.disabled = true
            turnoComputadora(puntosJugador);
            console.log(puntosJugador);
            btnDetener.disabled = true;
        }else if(puntosJugador === 21){
            turnoComputadora(puntosJugador);
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        }
    });
    
    btnDetener.addEventListener('click', () => {
        turnoComputadora(puntosJugador);
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    })
    
    btnNuevo.addEventListener('click', () => {
        localStorage.setItem('score',scoreJugador);
        if(scoreJugador != 0 ){
            verificarPuesto(scoreJugador);
        }
        dec = [];
        crearBaraja();
    
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    
        puntosJugador = 0;
        puntosPc = 0;
    
        divJuadorCartas.innerHTML = '';
        divPcCartas.innerHTML = '';
    
        puntuajeJugador[0].innerText = 0;
        puntuajeJugador[1].innerText = 0;
    })
})();
