const videoBackground = document.querySelector('#video-background');
const videoLoop = document.querySelector('#video-loop');

videoBackground.addEventListener('ended', () => {
  videoBackground.style.opacity = "0"; // Riduci l'opacità del video iniziale
  videoLoop.style.display = "block"; // Mostra il video in loop
  fadeIn(videoLoop); // Applica l'effetto dissolvenza sul video in loop
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

// Funzione per cambiare pagina con effetto di dissolvenza
function changePage(language) {
  const videoBackground = document.getElementById('video-background');
  const videoLoop = document.getElementById('video-loop');
  const italian = document.getElementById('itflag');
  const english = document.getElementById('enflag');
  

  // Nasconde il video in background e i bottoni
  videoBackground.style.transition = 'opacity 1s ease';
  videoBackground.style.opacity = '0';
  videoLoop.style.transition = 'opacity 1s ease';
  videoLoop.style.opacity = '0';
  italian.style.transition = 'opacity 1s ease';
  italian.style.opacity = '0';
  english.style.transition = 'opacity 1s ease';
  english.style.opacity = '0';
  

  // Attendi che il video in background sia completamente nascosto prima di cambiare pagina
  setTimeout(() => {
    // Determina l'URL della pagina in base alla lingua selezionata
    const nextPageUrl = language === 'italian' ? 'IT/MainPageIt.html' : 'EN/MainPageEn.html';

    // Reindirizza l'utente verso la nuova pagina
    window.location.href = nextPageUrl;
  }, 1000); // Dopo 1 secondo, che è la durata dell'animazione di dissolvenza
}
