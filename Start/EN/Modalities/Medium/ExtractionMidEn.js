// Funzione per mischiare un array
P_Inglese(7);
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array; 
}

// Funzione per mischiare una parola
function mischiaParola(parola) {
    let arrayParola = parola.split('');
    let parolaMischiata = shuffleArray(arrayParola);
    return parolaMischiata.join('').toUpperCase(); 
}

// Funzione per ottenere una parola casuale di 5 caratteri dal sessionStorage dopo 4 secondi
function getPseudoRandomWord() {
    setTimeout(function() {
        let parolaCasuale = sessionStorage.getItem('name');
        let parolaMischiata = mischiaParola(parolaCasuale);
        visualizzaParolaMischiata(parolaMischiata);
    }, 1000); // Ritardo di 4 secondi
}

// Funzione per visualizzare la parola mischiata
function visualizzaParolaMischiata(parolaMischiata) {
    document.getElementById("scrambleP").textContent = parolaMischiata;
}

// Aggiungi un event listener al bottone di shuffle
document.getElementById("Shuffle").addEventListener("click", function() {
    getPseudoRandomWord();
});

// Funzione per ripristinare lo stato iniziale
function resetGame() {
   // Ricarica la pagina
   location.reload();
}

// Funzione per visualizzare la parola non mischiata
function showGuess() {
    // Disabilita l'input
    document.getElementById("UrGuess").disabled = true;

    // Blocca il bottone di shuffle
    document.getElementById("Shuffle").disabled = true;

    // Ottieni la parola originale
    let parolaOriginale = sessionStorage.getItem('name');

    // Visualizza la parola originale maiuscola
    document.getElementById("scrambleP").textContent = parolaOriginale.toUpperCase();
}

// Aggiungi un event listener al bottone di reset
document.getElementById("Reset").addEventListener("click", function() {
    resetGame();
});

// Aggiungi un event listener al bottone di showguess
document.getElementById("ShwGuess").addEventListener("click", function() {
    showGuess();
});

// Aggiungi un event listener al bottone di shuffle
document.getElementById("Shuffle").addEventListener("click", function() {
    // Controlla se il bottone show guess è attivo, in tal caso non fare nulla
    if (!document.getElementById("ShwGuess").disabled) {
        getPseudoRandomWord();
    }
});

// Chiama la funzione per ottenere la parola casuale all'avvio della pagina
getPseudoRandomWord()
