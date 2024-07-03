//assegno alle variabili HTML alle mie nuove js
const videoBackground = document.querySelector('#video-background');
videoBackground.addEventListener('ended', () => {
  videoLoop.play(); // Avvia il secondo video in loop
});

// Funzione per scintille
function spark(event){
  let i = document.createElement('i');
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

