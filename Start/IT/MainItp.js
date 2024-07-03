//assegno alle variabili HTML alle mie nuove js
const videoBackground = document.querySelector('#video-background');

videoBackground.addEventListener('ended', () => {
  videoLoop.play(); // Avvia il secondo video in loop
});
// Funzione per scintille
function spark(event){
    let i = document.createElement('i'); //Crea un nuovo elemento.
    i.style.left = (event.pageX) + 'px'; 
    i.style.top = (event.pageY) + 'px';
    i.style.transform = `scale(${Math.random() * 2 + 1})` ;
    i.style.setProperty('--x',getRandomTransitionValue());
    i.style.setProperty('--y',getRandomTransitionValue());

    document.body.appendChild(i);

    setTimeout(() => {
      document.body.removeChild(i);
    },2000)
}

function getRandomTransitionValue(){
      return `${Math.random() * 400 - 200}px`;
}

document.addEventListener('mousemove', spark);

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
        var buttonContainer = document.querySelector('.button-container');
        buttonContainer.style.display = 'flex'; // Mostra la div dei bottoni
      }, 1500); // Ritardo di 1,5 secondi (1500 millisecondi)
});

