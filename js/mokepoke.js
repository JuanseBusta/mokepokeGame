'use strict';
let ataqueJugador
let ataqueEnemigo
let vidaJugador=1000
let vidaEnemigo=1000
let ataqueNumEnemigo
let ataqueNumJugador

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let sectionSeleccionarAtaque = document.getElementById('eleccion-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReinicar = document.getElementById('reiniciar')
    sectionReinicar.style.display = 'none'

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonLuz = document.getElementById('boton-luz')
    botonLuz.addEventListener('click', ataqueLuz)

    let botonOscuridad = document.getElementById('boton-oscuridad')
    botonOscuridad.addEventListener('click', ataqueOscuridad)

    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click',reiniciar)
}

function seleccionarMascotaJugador(){
    let inputBurbunene = document.getElementById('burbunene')
    let inputGuacaMike = document.getElementById('guacaMike')
    let inputArruguitas = document.getElementById('arruguitas')
    let inputChorronguito = document.getElementById('chorronguito')
    let inputNenenene = document.getElementById('nenenene')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    let sectionSeleccionarAtaque = document.getElementById('eleccion-ataque')
    if (inputBurbunene.checked) {
        alert('Seleccionaste a Burbunene')
        spanMascotaJugador.innerHTML='Burbunene'
    } else if (inputGuacaMike.checked) {
        alert('Seleccionaste a GuacaMike')
        spanMascotaJugador.innerHTML='GuacaMike'
    } else if (inputArruguitas.checked) {
        alert('Seleccionaste a Arruguitas')
        spanMascotaJugador.innerHTML='Arruguitas'
    } else if (inputChorronguito.checked) {
        alert('Seleccionaste a Chorronguito')
        spanMascotaJugador.innerHTML='Chorronguito'
    } else if (inputNenenene.checked) {
        alert('Seleccionaste a Nenenene')
        spanMascotaJugador.innerHTML='Nenenene'
    } else { alert('DEBES SELECCIONAR UNA MASCOTA')}
    if(inputBurbunene.checked||inputGuacaMike.checked||inputArruguitas.checked||inputChorronguito.checked||inputNenenene.checked){
        sectionSeleccionarMascota.style.display = 'none'
        
    sectionSeleccionarAtaque.style.display = 'flex'
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let mascotaAleatoria = aleatorio(1,5)
    if(mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML='Burbunene'
    } else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML='GuacaMike'
    } else if(mascotaAleatoria==3){
        spanMascotaEnemigo.innerHTML='Arruguitas'
    } else if(mascotaAleatoria==4){
        spanMascotaEnemigo.innerHTML='Chorronguito'
    } else {
        spanMascotaEnemigo.innerHTML='Nenenene'
    }
}

function ataqueFuego(){
    ataqueJugador='Fuego'
    alert('Seleccionaste '+ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador='Agua'
    alert('Seleccionaste '+ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador='Tierra'
    alert('Seleccionaste '+ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueLuz(){
    ataqueJugador='Luz'
    alert('Seleccionaste '+ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueOscuridad(){
    ataqueJugador='Oscuridad'
    alert('Seleccionaste '+ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,5)
    if (ataqueAleatorio==1) {
        ataqueEnemigo = 'Fuego'
        alert('El enemigo seleccionó fuego como ataque')
    } else if (ataqueAleatorio==2) {
        ataqueEnemigo = 'Agua'
        alert('El enemigo seleccionó agua como ataque')
    } else if (ataqueAleatorio==3) {
        ataqueEnemigo = 'Tierra'
        alert('El enemigo seleccionó tierra como ataque')
    } else if (ataqueAleatorio==4) {
        ataqueEnemigo = 'Luz'
        alert('El enemigo seleccionó Luz como ataque')
    } else {
        ataqueEnemigo = 'Oscuridad'
        alert('El enemigo seleccionó oscuridad como ataque')
    }
    combate()
}

function combate(){
    let spanVidaJugador=document.getElementById('salud-jugador')
    let spanVidaEnemigo=document.getElementById('salud-enemigo')

    while (vidaJugador>0 && vidaEnemigo>0) {
    if (ataqueEnemigo == 'Fuego' && ataqueJugador == 'Tierra' || ataqueEnemigo == 'Agua' && ataqueJugador == 'Fuego' || ataqueEnemigo == 'Tierra' && ataqueJugador == 'Agua'){
            ataqueNumEnemigo = (aleatorio(80,100))*1.2
            vidaJugador = vidaJugador-ataqueNumEnemigo
            spanVidaJugador.innerHTML=vidaJugador
            ataqueNumJugador = (aleatorio(80,90))*0.8
            vidaEnemigo = vidaEnemigo-ataqueNumJugador
            spanVidaEnemigo.innerHTML = vidaEnemigo
            crearMensaje ()
            break;
        } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra' || ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego' || ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
            ataqueNumEnemigo= (aleatorio(80,90))*0.8
            vidaJugador = vidaJugador-ataqueNumEnemigo
            spanVidaJugador.innerHTML=vidaJugador
            ataqueNumJugador = (aleatorio(80,100))*1.2
            vidaEnemigo = vidaEnemigo-ataqueNumJugador
            spanVidaEnemigo.innerHTML = vidaEnemigo
            crearMensaje ()
            break;
        } else if(ataqueJugador == 'Luz' && ataqueEnemigo == 'Oscuridad' || ataqueJugador == 'Oscuridad' && ataqueEnemigo == 'Luz'){
            ataqueNumEnemigo=(aleatorio(90,100))*1.25
            vidaJugador = vidaJugador-ataqueNumEnemigo
            spanVidaJugador.innerHTML=vidaJugador
            ataqueNumJugador = (aleatorio(90,100))*1.25
            vidaEnemigo = vidaEnemigo-ataqueNumJugador
            spanVidaEnemigo.innerHTML = vidaEnemigo
            crearMensaje()
            break;
        } else {
            ataqueNumEnemigo=(aleatorio(85,95))
            vidaJugador = vidaJugador-ataqueNumEnemigo
            spanVidaJugador.innerHTML=vidaJugador
            ataqueNumJugador = (aleatorio(85,95))
            vidaEnemigo = vidaEnemigo-ataqueNumJugador
            spanVidaEnemigo.innerHTML = vidaEnemigo
            crearMensaje ()
            break;
        }
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidaEnemigo<0 && vidaJugador>0){
        crearMensajeFinal('Felicitaciones! Ganaste🎉')
    } else if(vidaJugador<0 && vidaEnemigo>0){
        crearMensajeFinal('Lo sentimos! Perdiste😢')
    } else if (vidaJugador<0 && vidaEnemigo<0) crearMensajeFinal('Es un empate😐')
    encuadreVidas()
}

function encuadreVidas(){
    let spanVidaJugador=document.getElementById('salud-jugador')
    let spanVidaEnemigo=document.getElementById('salud-enemigo')
    if(vidaEnemigo<0){ 
        spanVidaEnemigo.innerHTML=0
    } 
    if(vidaJugador<0) {
        spanVidaJugador.innerHTML=0
    }
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafoMascotas = document.createElement('p')
    let parrafoAtaques = document.createElement('p')
    parrafoMascotas.innerHTML = 'Tu mascota atacó con '+ataqueJugador+'. La mascota del enemigo atacó con '+ataqueEnemigo+ '.'
    parrafoAtaques.innerHTML = 'El enemigo te infligió '+ataqueNumEnemigo+ ' de daño. Tú le infligiste '+ataqueNumJugador+ ' de daño.'
    sectionMensajes.appendChild(parrafoMascotas)
    sectionMensajes.appendChild(parrafoAtaques)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafoFinal = document.createElement('p')
    
    parrafoFinal.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafoFinal)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let botonLuz = document.getElementById('boton-luz')
    botonLuz.disabled = true

    let botonOscuridad = document.getElementById('boton-oscuridad')
    botonOscuridad.disabled = true

    let sectionReinicar = document.getElementById('reiniciar')
    sectionReinicar.style.display = 'block'
}

function reiniciar (){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load',iniciarJuego);
