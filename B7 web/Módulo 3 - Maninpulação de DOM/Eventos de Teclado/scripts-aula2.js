function soltou(evento) {
    console.log(`Apertou: ${evento.code}`);
    console.log(`Apertou: ${evento.key}`);
    console.log(`Shift? ${evento.shiftKey}`);
}

// function soltou(evento) {
//     console.log('Soltou!');
// }

// function segurou(evento) {
//     console.log('Segurou!');
// }


const input = document.querySelector('input')
input.addEventListener('keyup', soltou);
