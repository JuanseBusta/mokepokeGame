function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
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
    let seleccionAleatoria = aleatorio(1,5)

    if(seleccionAleatoria==1){
        spanMascotaEnemigo.innerHTML='Burbunene'
    } else if(seleccionAleatoria==2){
        spanMascotaEnemigo.innerHTML='GuacaMike'
    } else if(seleccionAleatoria==3){
        spanMascotaEnemigo.innerHTML='Arruguitas'
    } else if(seleccionAleatoria==4){
        spanMascotaEnemigo.innerHTML='Chorronguito'
    } else {
        spanMascotaEnemigo.innerHTML='Nenenene'
    }

}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

window.addEventListener('load',iniciarJuego);