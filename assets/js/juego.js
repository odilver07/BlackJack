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
    let puntosJugador = 0,
        puntosPc = 0;
    console.log(btnPedir);
    
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
    
        dec = _.shuffle(dec);
        // console.log(dec);
    
        return dec;
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
            console.log(puntosPc);
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta')
            divPcCartas.append(imgCarta)
        }while(puntosMinimos <=21 && puntosPc <=21 && puntosPc-puntosJugador <= 0);
    }
    
    // console.log(valorCarta(pedirCarta()));
    
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

