function desenhaQuadrado(x, y, cor) {
  const tela = document.getElementById('canvas')
  const pincel = tela.getContext('2d')

  pincel.fillStyle = cor
  pincel.fillRect(x, y, 50, 50)
  pincel.fillStroke = '#000'
  pincel.strokeRect(x, y, 50, 50)
}

let x = 0

// while (x < 600) {
//   desenhaQuadrado(x, 0, 'green')
//   desenhaQuadrado(x, 50, 'red')
//   x += 50
// }

for (x; x < 600; x += 50) {
  desenhaQuadrado(x, 0, 'green')
}