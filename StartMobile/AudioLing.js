
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio-background');
    var buttons = document.querySelectorAll('.button-container button');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        fadeOutAudio();
      });
    });
  
    function fadeOutAudio() {
      var fadeOutInterval = setInterval(function() {
        if (audio.volume > 0.1) {
          audio.volume -= 0.1; // Riduci gradualmente il volume
        } else {
          clearInterval(fadeOutInterval);
          audio.pause(); // Interrompi l'audio
        }
      }, 100); // Intervallo di dissolvenza in millisecondi
    }
  });
  