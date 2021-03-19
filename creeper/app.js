const tela = document.getElementById('canvas')
const pincel = tela.getContext('2d')

pincel.fillStyle = '#333'
pincel.fillRect(0, 0, 600, 400)

pincel.fillStyle = 'darkgreen'
pincel.fillRect(130, 45, 350, 300)

pincel.fillStyle = '#000'
pincel.fillRect(175, 90, 90, 90)

pincel.fillStyle = '#000'
pincel.fillRect(335, 90, 90, 90)

pincel.fillStyle = '#000'
pincel.fillRect(265, 180, 70, 100)

pincel.fillStyle = '#000'
pincel.fillRect(225, 235, 40, 110)

pincel.fillStyle = '#000'
pincel.fillRect(335, 235, 40, 110)

// var tela = document.querySelector('canvas');
// var pincel = tela.getContext('2d');

// // cabeça
// pincel.fillStyle = 'darkgreen';
// pincel.fillRect(200, 50, 350, 300);

// // olhos
// pincel.fillStyle = 'black';
// pincel.fillRect(250, 110, 90, 90);
// pincel.fillRect(410, 110, 90, 90);

// // nariz
// pincel.fillRect(340, 200, 70, 100);

// // boca ou barba
// pincel.fillRect(300, 240, 40, 110);
// pincel.fillRect(410, 240, 40, 110);