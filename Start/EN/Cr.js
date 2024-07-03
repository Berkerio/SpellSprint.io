//assegno alle variabili HTML alle mie nuove js
const videoBackground = document.querySelector('#video-background');

videoBackground.addEventListener('ended', () => {
  videoLoop.play(); // Avvia il secondo video in loop
});