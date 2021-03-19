const tela = document.querySelector('canvas')

const pincel = tela.getContext('2d')

pincel.fillStyle = '#fff'
pincel.fillRect(0, 0, 600, 400) // preencheRetangulo(posiçãoX, posiçãoY, largura, altura)


pincel.fillStyle = 'green'
pincel.fillRect(0, 0, 200, 400) // preencheRetangulo(posiçãoX, posiçãoY, largura, altura)

pincel.fillStyle = 'red'
pincel.fillRect(400, 0, 200, 400) // preencheRetangulo(posiçãoX, posiçãoY, largura, altura)

pincel.fillStyle = 'yellow'
pincel.beginPath() // iniciaCaminho
pincel.moveTo(300, 200)
pincel.lineTo(200, 400)
pincel.lineTo(400, 400)
pincel.fill()

pincel.fillStyle = 'blue'
pincel.beginPath()
pincel.arc(300, 200, 50, 0, 2 * Math.PI)
pincel.fill()