const words = [
    'EXAMPLE', 'PROGRAM', 'DEVELOP', 'MOBILE', 'SHUFFLE', 
    'SOLUTION', 'COMPUTE', 'PICTURE', 'NETWORK', 'WEBSITE', 
    'BALANCE', 'CHANNEL', 'DISPLAY', 'FEEDBACK', 'GROWING', 
    'HOTLINE', 'INVOICE', 'JOURNAL', 'KITCHEN', 'LEADING', 
    'MESSAGE', 'NUMERIC', 'OFFLINE', 'PAYMENT', 'QUALITY', 
    'REQUEST', 'SERVICE', 'TRAFFIC', 'UPGRADE', 'VIRTUAL', 
    'WINDOWS', 'ZIPPING', 'CAPTURE', 'FEATURE', 'HISTORY', 
    'MANAGER', 'NATURAL', 'PROJECT', 'REGULAR', 'TENSION'
  ];
  let currentWord = '';
  let scrambledWord = '';
  let attempts = 2;
  
  const attemptsElement = document.getElementById('attempts-count');
  const solutionInput = document.getElementById('solution-input');
  const gameSpaceElement = document.getElementById('gameSpace');
  const mischiaBtn = document.getElementById('mischia-btn');
  const submitBtn = document.getElementById('submit-btn');
  const mostraSoluzioneBtn = document.getElementById('mostra-soluzione');
  const resetBtn = document.getElementById('reset-btn');
  const errorMessage = document.getElementById('error-message');
  const gameOverScreen = document.getElementById('game-over-screen');
  const youWonScreen = document.getElementById('you-won-screen');
  const gameOverResetBtn = document.getElementById('game-over-reset');
  const youWonResetBtn = document.getElementById('you-won-reset');
  const loseMessage = document.getElementById('lose-message');
  const winMessage = document.getElementById('win-message');
  
  function initGame() {
      currentWord = words[Math.floor(Math.random() * words.length)];
      scrambleWord();
      attempts = 2;
      updateUI();
      hideResultScreens();
      errorMessage.textContent = '';
      solutionInput.value = '';
      mostraSoluzioneBtn.style.visibility = 'visible';
  }
  
  function scrambleWord() {
      let array = currentWord.split('');
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      scrambledWord = array.join('');
      
      if (scrambledWord === currentWord) {
          scrambleWord();
      }
  }
  
  function updateUI() {
      attemptsElement.textContent = attempts;
      gameSpaceElement.textContent = scrambledWord;
  }
  
  function hideResultScreens() {
      gameOverScreen.classList.remove('show');
      youWonScreen.classList.remove('show');
  }
  
  function showGameOver() {
      loseMessage.textContent = `You Lost!The correct word was: ${currentWord}`;
      gameOverScreen.classList.add('show');
  }
  
  function showYouWon() {
      winMessage.textContent = `You Won!The correct word was: ${currentWord}`;
      youWonScreen.classList.add('show');
  }
  
  mischiaBtn.addEventListener('click', () => {
      scrambleWord();
      updateUI();
  });
  
  submitBtn.addEventListener('click', () => {
      const userSolution = solutionInput.value.toUpperCase();
      if (userSolution === currentWord) {
          showYouWon();
      } else {
          attempts--;
          updateUI();
          if (attempts === 0) {
              showGameOver();
          } else {
              errorMessage.textContent = 'Wrong Guess, Retry!';
              errorMessage.style.display = 'block';
          }
      }
  });
  
  mostraSoluzioneBtn.addEventListener('click', showSolution);
  mostraSoluzioneBtn.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          showSolution();
      }
  });
  
  function showSolution() {
      gameSpaceElement.textContent = currentWord;
      mostraSoluzioneBtn.style.visibility = 'hidden';
  }
  
  resetBtn.addEventListener('click', initGame);
  gameOverResetBtn.addEventListener('click', initGame);
  youWonResetBtn.addEventListener('click', initGame);
  
  initGame();