'use strict';
let ataqueJugador
let ataqueEnemigo
let vidaJugador=1000
let vidaEnemigo=1000
let ataqueNumEnemigo
let ataqueNumJugador
let mascotaJugador
let mascotaEnemigo

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
        mascotaJugador = 'Burbunene'
    } else if (inputGuacaMike.checked) {
        alert('Seleccionaste a GuacaMike')
        spanMascotaJugador.innerHTML='GuacaMike'
        mascotaJugador = 'GuacaMike'
    } else if (inputArruguitas.checked) {
        alert('Seleccionaste a Arruguitas')
        spanMascotaJugador.innerHTML='Arruguitas'
        mascotaJugador = 'Arruguitas'
    } else if (inputChorronguito.checked) {
        alert('Seleccionaste a Chorronguito')
        spanMascotaJugador.innerHTML='Chorronguito'
        mascotaJugador = 'Chorronguito'
    } else if (inputNenenene.checked) {
        alert('Seleccionaste a Nenenene')
        spanMascotaJugador.innerHTML='Nenenene'
        mascotaJugador = 'Nenenene'
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
        mascotaEnemigo='Burbunene'
    } else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML='GuacaMike'
        mascotaEnemigo='GuacaMike'
    } else if(mascotaAleatoria==3){
        spanMascotaEnemigo.innerHTML='Arruguitas'
        mascotaEnemigo='Arruguitas'
    } else if(mascotaAleatoria==4){
        spanMascotaEnemigo.innerHTML='Chorronguito'
        mascotaEnemigo='Chorronguito'
    } else {
        spanMascotaEnemigo.innerHTML='Nenenene'
        mascotaEnemigo='Nenenene'
    }
}

function ataqueFuego(){
    ataqueJugador='Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador='Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador='Tierra'
    ataqueAleatorioEnemigo()
}
function ataqueLuz(){
    ataqueJugador='Luz'
    ataqueAleatorioEnemigo()
}
function ataqueOscuridad(){
    ataqueJugador='Oscuridad'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,5)
    if (ataqueAleatorio==1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio==2) {
        ataqueEnemigo = 'Agua'
    } else if (ataqueAleatorio==3) {
        ataqueEnemigo = 'Tierra'
    } else if (ataqueAleatorio==4) {
        ataqueEnemigo = 'Luz'
    } else {
        ataqueEnemigo = 'Oscuridad'
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
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    let nombreMascotaJugador = document.getElementById('nombre-mascota-jugador')
    let nombreMascotaEnemigo = document.getElementById('nombre-mascota-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    nombreMascotaJugador.innerHTML=mascotaJugador
    nombreMascotaEnemigo.innerHTML=mascotaEnemigo
    sectionMensajes.innerHTML = 'Tu mascota atacó con '+ataqueJugador+'. Enemigo atacó con '+ataqueEnemigo+'.'
    nuevoAtaqueDelEnemigo.innerHTML= 'El enemigo te infligió '+ataqueNumEnemigo+ ' de daño.'
    nuevoAtaqueDelJugador.innerHTML=  'Tú le infligiste '+ataqueNumJugador+ ' de daño.'
    
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)


}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
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