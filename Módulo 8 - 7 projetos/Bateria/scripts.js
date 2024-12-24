
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


document.querySelector('.q').addEventListener("click", () => playBuzzer(notes.do, 200));   // Do
document.querySelector('.w').addEventListener("click", () => playBuzzer(notes.re, 200));   // Re
document.querySelector('.e').addEventListener("click", () => playBuzzer(notes.mi, 200));   // Mi
document.querySelector('.a').addEventListener("click", () => playBuzzer(notes.fa, 200));   // Fa
document.querySelector('.s').addEventListener("click", () => playBuzzer(notes.sol, 200));  // Sol
document.querySelector('.d').addEventListener("click", () => playBuzzer(notes.la, 200));   // La
document.querySelector('.z').addEventListener("click", () => playBuzzer(notes.si, 200));   // Si
document.querySelector('.x').addEventListener("click", () => playBuzzer(notes.do * 2, 200)); // High Do
document.querySelector('.c').addEventListener("click", () => playBuzzer(notes.re * 2, 200)); // High Re

// playBuzzer(440, 500); 