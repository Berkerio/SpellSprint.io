

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

