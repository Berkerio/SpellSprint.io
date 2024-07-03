document.addEventListener("DOMContentLoaded", function() {
  var keyboardButtons = document.querySelectorAll(".keyboard .btn");
  var deleteButton = document.getElementById("btnDel");
  var inputField = document.getElementById("UrGuess");
  var label = document.querySelector(".GuessL");

  // Nascondi il label quando l'utente inizia a digitare
  var hideLabel = function() {
      if (inputField.value.trim() !== '') {
          label.style.display = 'none';
      } else {
          label.style.display = 'block';
      }
  };

  // Limita il numero di caratteri a 5
  var limitCharacters = function() {
      if (inputField.value.length > 5) {
          inputField.value = inputField.value.slice(0, 5);
      }
  };

  // Aggiungi event listener a ciascun pulsante della tastiera
  keyboardButtons.forEach(function(button) {
      button.addEventListener("mousedown", function(event) {
          event.preventDefault(); // Evita il comportamento predefinito del pulsante (ad es. la selezione del testo)
          var buttonText = button.textContent;
          if (buttonText === 'DEL') {
              deleteChar();
          } else {
              addChar(buttonText);
          }
          hideLabel();
          limitCharacters();
      });
  });

  // Aggiungi event listener al pulsante DEL della tastiera virtuale
  deleteButton.addEventListener("click", function() {
      deleteChar();
  });

  // Event listener per input
  inputField.addEventListener("input", function() {
      hideLabel();
      limitCharacters();
  });

  // Funzione per aggiungere un carattere all'input
  function addChar(char) {
      if (inputField.value.length < 5) {
          inputField.value += char;
      }
  }

  // Funzione per eliminare l'ultimo carattere dall'input
  function deleteChar() {
      console.log("Deleting character");
      var value = inputField.value;
      inputField.value = value.substring(0, value.length - 1);
  }
});
