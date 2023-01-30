let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

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
}

function seleccionarMascotaJugador(){
    let inputBurbunene = document.getElementById('burbunene')
    let inputGuacaMike = document.getElementById('guacaMike')
    let inputArruguitas = document.getElementById('arruguitas')
    let inputChorronguito = document.getElementById('chorronguito')
    let inputNenenene = document.getElementById('nenenene')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
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
    crearMensaje()
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ataqueJugador+'. La mascota del enemigo atacó con '+ataqueEnemigo+'. Pendiente! 🎉.'
    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

window.addEventListener('load',iniciarJuego);