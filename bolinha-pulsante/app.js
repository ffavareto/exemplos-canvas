const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

let x = 20
let sentido = 1

function atualizaTela() {
  limpaTela()

  if (x > 30) {
    sentido = -1
  } else if (x < 20) {
    sentido = 1
  }

  desenhaCirculo(200, 100, x, 'red')
  x = x + sentido
}

setInterval(atualizaTela, 20)


// var raio = 19;

// var fatorCrescimento = 0;

// function atualizaTela() {

//     // limpamos sempre a tela para podermos desenhar um novo círculo
//     limpaTela();

//     if(raio > 30) {
//         // o raio tem que diminuir
//         fatorCrescimento = -1;
//     } else if (raio < 20) {
//         // o raio tem que aumentar
//         fatorCrescimento = 1;
//     }

//     raio = raio + fatorCrescimento;
// }