function seleccionarMascotaJugador(){
    let input1 = document.getElementById('burbunene')
    let input2 = document.getElementById('guacaMike')
    let input3 = document.getElementById('arruguitas')
    let input4 = document.getElementById('chorronguito')
    let input5 = document.getElementById('nenenene')

    if (input1.checked) {
        alert('Seleccionaste a Burbunene')
    } else if (input2.checked) {
        alert('Seleccionaste a GuacaMike')
    } else if (input3.checked) {
        alert('Seleccionaste a Arruguitas')
    } else if (input4.checked) {
        alert('Seleccionaste a Chorronguito')
    } else if (input5.checked) {
        alert('Seleccionaste a Nenenene')
    } else { alert('DEBES SELECCIONAR UNA MASCOTA')}
}

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

window.addEventListener('load',iniciarJuego);