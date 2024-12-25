

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playBuzzer(frequency, duration) {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), duration);
}

const notes = {
    do: 261.63,  // C
    re: 293.66,  // D
    mi: 329.63,  // E
    fa: 349.23,  // F
    sol: 392.00, // G
    la: 440.00,  // A
    si: 493.88   // B
};


document.querySelector('.q').addEventListener("click", () => playBuzzer(notes.do, 50));   // Do
document.querySelector('.w').addEventListener("click", () => playBuzzer(notes.re, 50));   // Re
document.querySelector('.e').addEventListener("click", () => playBuzzer(notes.mi, 50));   // Mi
document.querySelector('.a').addEventListener("click", () => playBuzzer(notes.fa, 50));   // Fa
document.querySelector('.s').addEventListener("click", () => playBuzzer(notes.sol, 50));  // Sol
document.querySelector('.d').addEventListener("click", () => playBuzzer(notes.la, 50));   // La
document.querySelector('.z').addEventListener("click", () => playBuzzer(notes.si, 50));   // Si
document.querySelector('.x').addEventListener("click", () => playBuzzer(notes.do * 2, 50)); // High Do
document.querySelector('.c').addEventListener("click", () => playBuzzer(notes.re * 2, 50)); // High Re

document.addEventListener('keyup', press);

function press(evento) {
    if (evento.key == 'q' || evento.key == 'Q'){
        playBuzzer(notes.do, 50);
    } else if (evento.key == 'w' || evento.key == 'W'){
        playBuzzer(notes.re, 50);
    } else if (evento.key == 'e' || evento.key == 'E'){
        playBuzzer(notes.mi, 50);
    } else if (evento.key == 'a' || evento.key == 'A'){
        playBuzzer(notes.fa, 50);
    } else if (evento.key == 's' || evento.key == 'S'){
        playBuzzer(notes.sol, 50);
    } else if (evento.key == 'd' || evento.key == 'D'){
        playBuzzer(notes.la, 50);
    } else if (evento.key == 'z' || evento.key == 'Z'){
        playBuzzer(notes.si, 50);
    } else if (evento.key == 'x' || evento.key == 'X'){
        playBuzzer(notes.do * 2, 50);
    } else if (evento.key == 'c' || evento.key == 'C'){
        playBuzzer(notes.re * 2, 50);
    } 
}

// playBuzzer(440, 500); 