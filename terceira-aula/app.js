const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')
let paleta = document.getElementById('colors')

pincel.fillStyle = '#555'
pincel.fillRect(0, 0, 600, 400)

let desenha = false
let raio = 10

function desenhaCirculo(e) {
  if (desenha) {
    let x = e.pageX - tela.offsetLeft
    let y = e.pageY - tela.offsetTop


    if (e.shiftKey && e.altKey) {
      alert('Só pressione uma tecla por vez!')
    } else if (e.shiftKey && raio + 10 <= 40) {
      raio += 10
    } else if (e.altKey && raio - 5 >= 10) {
      raio -= 5
    }


    // pincel.fillStyle = cores[indiceAtual]
    pincel.fillStyle = paleta.value
    pincel.beginPath()
    pincel.arc(x, y, raio, 0, Math.PI * 2)
    pincel.fill()
  }
}

// let color = 'green'
// document.getElementById('colors').addEventListener('change', () => {
//   color = document.getElementById('colors').value
// })

// const cores = ['blue', 'red', 'green']
// let indiceAtual = 0

// function mudaCor() {
//   indiceAtual++

//   if (indiceAtual >= cores.length) {
//     indiceAtual = 0
//   }

//   return false
// }

function habilitaDesenhar() {
  desenha = true
}

function desabilitaDesenhar() {
  desenha = false
}

// tela.oncontextmenu = mudaCor
tela.onmousemove = desenhaCirculo
tela.onmousedown = habilitaDesenhar
tela.onmouseup = desabilitaDesenhar

