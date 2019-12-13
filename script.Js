const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let userSelection= document.getElementById("pMove");
let computerSelection = document.getElementById("cMove");
let userscore_span = document.getElementById("user-score");
let computerscore_span = document.getElementById("computer-score");
let userScore =0;
let computerScore=0;
const result_p = document.querySelector(".result > p");

function getcomputerChoice () {
  const choices = ['r', 'p', 's' ];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];


}
function converToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
 }


function win(userChoice, computerChoice) {
  userScore++;
  userscore_span.innerHTML = userScore;
  computerscore_span.innerHTML = computerScore;
  result_p.innerHTML= converToWord(userChoice) + " beats " + converToWord(computerChoice) + ". You win!";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow') }, 1000);
console.log(userChoice);
console.log(computerChoice);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userscore_span.innerHTML = userScore;
  computerscore_span.innerHTML = computerScore;
  result_p.innerHTML= converToWord(userChoice) + " loses to  " + converToWord(computerChoice) + ". You Lost...!";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow') }, 1000);
console.log(userChoice);
console.log(computerChoice);
}
function draw(userChoice, computerChoice) {
  userscore_span.innerHTML = userScore;
  result_p.innerHTML= converToWord(userChoice) + " equals " + converToWord(computerChoice) + ". It's a draw.";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow') }, 1000);
  console.log(userChoice);
  console.log(computerChoice);

}

function game(userChoice) {
const computerChoice = getcomputerChoice();
switch (userChoice + computerChoice) {
case "rs":
case "pr":
case "sp":
win(userChoice, computerChoice);
  break;
case "rp":
case "ps":
case "sr":
lose(userChoice, computerChoice);
break;
case "rr":
case "pp":
case "ss":
draw(userChoice, computerChoice);
 break;
}

}

game("G")

rock_div.addEventListener("click", function(){
  game("r");
});

paper_div.addEventListener("click", function(){
  game("p");
});

scissors_div.addEventListener("click", function(){
  game("s");
});
