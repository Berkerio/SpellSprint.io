/*// Funzione per controllare se la parola inserita è corretta
function controllaParola() {
    // Recupera la parola originale dal sessionStorage e la converte in minuscolo
    let parolaOriginale = sessionStorage.getItem('name').toUpperCase();
    
    // Recupera il valore inserito dall'utente dall'input con id "UrGuess" e lo converte in minuscolo
    let parolaInserita = document.getElementById("UrGuess").value.trim().toUpperCase();
    
    // Confronta la parola inserita con la parola originale
    if (parolaInserita === parolaOriginale) {
        alert("Hai indovinato! La parola è corretta.");
        // Riproduci il video di feedback
        document.getElementById("video-feedback").play();
        // Azioni da eseguire se la parola è corretta (ad esempio, ricomincia il gioco)
    } else {
        alert("La parola inserita non è corretta. Riprova.");
        // Azioni da eseguire se la parola non è corretta (ad esempio, decrementa il numero di tentativi rimasti)
    }
}

// Aggiunge un gestore eventi al bottone "Sumbit" per eseguire la funzione controllaParola() al clic
document.getElementById("Sumbit").addEventListener("click", controllaParola);
// Recupera l'elemento di input e il bottone di reset
let inputElement = document.getElementById('UrGuess');
let resetButton = document.getElementById('Reset');

// Aggiungi un gestore di eventi per il click sul bottone di reset
resetButton.addEventListener('click', function() {
    inputElement.value = ''; // Cancella il contenuto dell'input
});*/
// Numero di tentativi disponibili
let tentativiRimasti = 2;

// Funzione per aggiornare il numero di tentativi visualizzati
function aggiornaTentativiVisualizzati() {
    document.getElementById("attempts").innerText = tentativiRimasti + "_TENTATIVI";
}

// Funzione per gestire la verifica della parola e i tentativi
function controllaParola() {
    // Recupera la parola originale dal sessionStorage e la converte in maiuscolo
    let parolaOriginale = sessionStorage.getItem('name').toUpperCase();
    
    // Recupera il valore inserito dall'utente dall'input con id "UrGuess" e lo converte in maiuscolo
    let parolaInserita = document.getElementById("UrGuess").value.trim().toUpperCase();
    
    // Confronta la parola inserita con la parola originale
    if (parolaInserita === parolaOriginale) {
        document.getElementById('victory-video').play();
        document.getElementById('victory-video').muted=false;  
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('popup-container').style.display = 'block';
        document.getElementById("Reset").style.opacity = "0";
        document.getElementById("error").style.opacity = "0";
        document.getElementById("attempts").style.opacity = "0";
        document.getElementById("UrGuess").style.opacity = "0";
        document.getElementById("Sumbit").style.opacity = "0";
        // Azioni da eseguire se la parola è corretta (ad esempio, ricomincia il gioco)
    } else {
        document.getElementById("error").style.opacity = "1";
        // Decrementa il numero di tentativi rimasti solo se è maggiore di 0
        if (tentativiRimasti > 0) {
            tentativiRimasti--;
            // Aggiorna il numero di tentativi visualizzati nell'HTML
            aggiornaTentativiVisualizzati();
            // Se i tentativi sono esauriti, mostra un messaggio di "Hai Perso"
            if (tentativiRimasti === 0) {
                
                document.getElementById('gameover-video').play(); 
                document.getElementById('gameover-video').muted=false;   
                document.getElementById('overlay1').style.display = 'block';
                document.getElementById('popup2-container').style.display = 'block';
                document.getElementById("attempts").style.opacity = "0";
                document.getElementById("UrGuess").style.opacity = "0";
                document.getElementById("Sumbit").style.opacity = "0";
                document.getElementById("error").style.opacity = "0";
                // Disabilita l'input e il pulsante di invio
                document.getElementById("UrGuess").disabled = true;
                document.getElementById("Sumbit").disabled = true;
                // Mostra il testo con la parola corretta
                document.getElementById("wordWas").style.opacity = "1";
        
                document.getElementById("correctWord").innerText = parolaOriginale;
            }
        }
    }
}

// Aggiunge un gestore eventi al bottone "Sumbit" per eseguire la funzione controllaParola() al clic
document.getElementById("Sumbit").addEventListener("click", controllaParola);

// Inizializza il numero di tentativi visualizzati
aggiornaTentativiVisualizzati();

// Recupera l'elemento di input e il bottone di reset
let inputEl = document.getElementById('UrGuess');
let resetBut = document.getElementById('Reset');

// Aggiungi un gestore di eventi per il click sul bottone di reset
resetButton.addEventListener('click', function() {
    inputElement.value = ''; // Cancella il contenuto dell'input
});
s