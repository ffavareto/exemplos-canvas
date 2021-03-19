const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')
pincel.fillStyle = 'lightgray'
pincel.fillRect(0, 0, 600, 400)

let x = 20
let y = 20

// códigos do teclado

const esquerda = 37
const cima = 38
const direita = 39
const baixo = 40

// taxa de incremento
let taxa = 10

function desenhaCirculo(x, y, raio) {

  pincel.fillStyle = 'blue'
  pincel.beginPath()
  pincel.arc(x, y, raio, 0, 2 * Math.PI)
  pincel.fill()
}

function limpaTela() {

  pincel.clearRect(0, 0, 600, 400)
}

function atualizaTela() {

  limpaTela()
  desenhaCirculo(x, y, 10)
}

setInterval(atualizaTela, 20)

function leDoTeclado(evento) {
  if (evento.keyCode === esquerda && evento.keyCode !== 39) {
    x -= taxa
  } else if (evento.keyCode === direita && evento.keyCode !== esquerda) {
    x += taxa
  } else if (evento.keyCode == cima && evento.keyCode !== baixo) {
    y -= taxa
  } else {
    y += taxa
  }
}

document.onkeydown = leDoTeclado