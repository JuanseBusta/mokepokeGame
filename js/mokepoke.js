'use strict';

const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionSeleccionarAtaque = document.getElementById('eleccion-ataque')
const sectionReinicar = document.getElementById('reiniciar')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonLuz = document.getElementById('boton-luz')
const botonOscuridad = document.getElementById('boton-oscuridad')
const botonReiniciar = document.getElementById('reiniciar')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaJugador=document.getElementById('salud-jugador')
const spanVidaEnemigo=document.getElementById('salud-enemigo')

const vidaDelJugador=document.getElementById('vida-jugador')
const vidaDelEnemigo=document.getElementById('vida-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const nombreMascotaJugador = document.getElementById('nombre-mascota-jugador')
const nombreMascotaEnemigo = document.getElementById('nombre-mascota-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const sectionVerMapa = document.getElementById('ver-mapa')
const CanvasMapa = document.getElementById('mapa')

let inputBurbunene
let inputGuacaMike
let inputArruguitas
let inputChorronguito
let inputNenenene
let ataqueJugador
let ataqueEnemigo
let vidaJugador=1000
let vidaEnemigo=1000
let ataqueNumEnemigo
let ataqueNumJugador
let mascotaJugador
let mascotaEnemigo
let mokepokes = []
let opcionDeMokepokes
class Mokepoke{
    constructor(nombre,foto,vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
    }
}

let burbunene = new Mokepoke('Burbunene','imagenes/Burbunene.png',1000)
let guacaMike = new Mokepoke('GuacaMike','imagenes/guacamike.png',1000)
let arruguitas = new Mokepoke('Arruguitas','imagenes/arruguitas.png',1000)
let chorronguito = new Mokepoke('Chorronguito','imagenes/chorronguito.png',1000)
let nenenene = new Mokepoke('Nenenene','imagenes/nenenene.png',1000)

mokepokes.push(burbunene, guacaMike, arruguitas, chorronguito, nenenene);


function iniciarJuego(){
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    sectionSeleccionarAtaque.style.display = 'none'
    mokepokes.forEach((mokepoke)=>{
        opcionDeMokepokes = `
        <input type="radio" name="mascota" id=${mokepoke.nombre} />
            <label class = "tarjeta-mokepoke" for=${mokepoke.nombre}>
                <p>${mokepoke.nombre}</p>
                <img src=${mokepoke.foto} alt=${mokepoke.nombre} />
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepokes
        inputBurbunene = document.getElementById('Burbunene')
        inputGuacaMike = document.getElementById('GuacaMike')
        inputArruguitas = document.getElementById('Arruguitas')
        inputChorronguito = document.getElementById('Chorronguito')
        inputNenenene = document.getElementById('Nenenene')
    })
    sectionReinicar.style.display = 'none'
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonLuz.addEventListener('click', ataqueLuz)
    botonOscuridad.addEventListener('click', ataqueOscuridad)
    botonReiniciar.addEventListener('click',reiniciar)
}

function seleccionarMascotaJugador(){
    
    if (inputBurbunene.checked) {
        alert('Seleccionaste a '+inputBurbunene.id)
        spanMascotaJugador.innerHTML=inputBurbunene.id
        mascotaJugador = inputBurbunene.id
    } else if (inputGuacaMike.checked) {
        alert('Seleccionaste a '+inputGuacaMike.id)
        spanMascotaJugador.innerHTML=inputGuacaMike.id
        mascotaJugador = inputGuacaMike.id
    } else if (inputArruguitas.checked) {
        alert('Seleccionaste a '+inputArruguitas.id)
        spanMascotaJugador.innerHTML=inputArruguitas.id
        mascotaJugador = inputArruguitas.id
    } else if (inputChorronguito.checked) {
        alert('Seleccionaste a '+inputChorronguito.id)
        spanMascotaJugador.innerHTML=inputChorronguito.id
        mascotaJugador = inputChorronguito.id
    } else if (inputNenenene.checked) {
        alert('Seleccionaste a '+inputNenenene.id)
        spanMascotaJugador.innerHTML=inputNenenene.id
        mascotaJugador = inputNenenene.id
    } else { alert('DEBES SELECCIONAR UNA MASCOTA')}
    if(inputBurbunene.checked||inputGuacaMike.checked||inputArruguitas.checked||inputChorronguito.checked||inputNenenene.checked){
        sectionSeleccionarMascota.style.display = 'none'
        
    sectionSeleccionarAtaque.style.display = 'flex'
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepokes.length-1)
    spanMascotaEnemigo.innerHTML=mokepokes[mascotaAleatoria].nombre
    mascotaEnemigo=mokepokes[mascotaAleatoria].nombre
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
        crearMensajeFinal('Felicitaciones! Ganaste????')
    } else if(vidaJugador<0 && vidaEnemigo>0){
        crearMensajeFinal('Lo sentimos! Perdiste????')
    } else if (vidaJugador<0 && vidaEnemigo<0) crearMensajeFinal('Es un empate????')
    encuadreVidas()
}

function encuadreVidas(){
    if(vidaEnemigo<0){ 
        spanVidaEnemigo.innerHTML=0
        vidaDelEnemigo.innerHTML=0
    } 
    if(vidaJugador<0) {
        spanVidaJugador.innerHTML=0
        vidaDelJugador.innerHTML=0
    }
}

function crearMensaje(){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    vidaDelJugador.innerHTML='Vida: '+vidaJugador
    vidaDelEnemigo.innerHTML='Vida: '+vidaEnemigo
    nombreMascotaJugador.innerHTML=mascotaJugador
    nombreMascotaEnemigo.innerHTML=mascotaEnemigo
    sectionMensajes.innerHTML = 'Tu mascota atac?? con '+ataqueJugador+'. Enemigo atac?? con '+ataqueEnemigo+'.'
    nuevoAtaqueDelEnemigo.innerHTML= 'El enemigo te infligi?? '+ataqueNumEnemigo+ ' de da??o.'
    nuevoAtaqueDelJugador.innerHTML=  'T?? le infligiste '+ataqueNumJugador+ ' de da??o.'
    
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
}

function crearMensajeFinal(resultadoFinal){
    let parrafoFinal = document.createElement('p')
    
    parrafoFinal.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafoFinal)
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonLuz.disabled = true
    botonOscuridad.disabled = true
    sectionReinicar.style.display = 'block'
}

function reiniciar (){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load',iniciarJuego);