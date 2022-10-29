function guessNumber() {
    let level = 3;
    let award = 2;
    let player = parseInt(prompt('Please enter your username: '));
  
    let random = Math.floor(Math.random() * 2) + 1;
  
    let number = parseInt(prompt('Guess a number between 1 and 2: '));
  
    while (number !== random) {
      number = parseInt(prompt('Guess a number between 1 and 2: '));
    }
  
    alert('You guessed the correct number.');
    alert(`you have ${award - 1} points`);
    alert(`Moving to level: ${level - 1}`);
  
  
    while (random <= 10) {
  
      random++;
  
      number = parseInt(prompt('Guess a number from 1 to 10: '));
  
      if (number === random) {
        alert('You guessed the correct number.');
        alert(`you have ${award++} points`);
        alert(`Moving to level: ${level++}`);
      } else {
        alert('Sorry!!! better luck next time');
      }
    };
  
    alert('GAME OVER !!!!');
  
  }
  
  guessNumber();
  
  