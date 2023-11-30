let secretNumber = Math.trunc(Math.random() * 20) +1;

console.log("secretNumber", secretNumber);

let score = 20;
let highScore= 0;

const displayMessage = function(message) {
  const check = document.querySelector('.message').textContent = message;
  console.log("check", check);
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log("guess", guess);
  //1. If no input provided then show "Invalid input"
  if(!guess){
   displayMessage("Invalid Number!");
  }
  else if(guess === secretNumber){
//2. If guess and secret number is equal then show "correct guess"
// background color change
// replace ? with ans  
displayMessage("Correct Guess");
document.querySelector('.number').textContent = secretNumber;

document.querySelector('body').style.backgroundColor = 'green';
document.querySelector('.number').style.width = '30rem';

if(score > highScore){
   highScore = score;
   document.querySelector('.highScore').textContent = highScore;
}
}
else if(guess !== secretNumber){
  //score -1
  // guess > secretNumber { Too High}
  //guess < secretNumber { Too Low}
  // score display
   if(score > 1){
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
    score --;
    document.querySelector('.score').textContent = score;
  }
}
else {
  displayMessage('You Lost The Game!');
  document.querySelector('.score').textContent = 0;
}


})

//reset functionality

//1. start guessing
//2. score = 20
//3. ? add
//4. background reset
//5. ?width reset
//6. clean user input
//7. highScore = 0

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) +1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent ='?';
  document.querySelector('.guess').value = '';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

})