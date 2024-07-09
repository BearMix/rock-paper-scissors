let currentHumanScore = 0;
let currentComputerScore = 0;

const body = document.querySelector('body');

const container = document.createElement('div');
const resultContainer = document.createElement('div');
const btnContainer = document.createElement('div');

const humanScore = document.createElement('p');
humanScore .textContent = `Your score: ${currentHumanScore}`;

const computerScore = document.createElement('p');
computerScore.textContent = `Computer score: ${currentComputerScore}`;

const result = document.createElement('p');

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';

const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';

const scissorsBtn = document.createElement('button');
scissorsBtn .textContent = 'Scissors';

body.appendChild(container);

container.appendChild(resultContainer);
resultContainer.appendChild(humanScore);
resultContainer.appendChild(computerScore);
resultContainer.appendChild(result);

container.appendChild(btnContainer);
btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);


function getComputerChoice() {
  let choises =  ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * 3);
  return choises[randomIndex];
}

function getHumanChoise(userChoise) {
  let computerChoice = getComputerChoice();
  playRound(userChoise, computerChoice);
  humanScore .textContent = `Your score: ${currentHumanScore}`;
  computerScore.textContent = `Computer score: ${currentComputerScore}`;
}


function playRound(humanChoice, computerChoice) {
  let tempResult = '';
  if (humanChoice === computerChoice) {
    tempResult = `It's a tie! Both chose ${computerChoice}.`;
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    currentHumanScore++;
    tempResult = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    currentComputerScore++;
    tempResult = `You losse! ${computerChoice} beats ${humanChoice}.`;
  }
  result.textContent = tempResult;
}
  
rockBtn.addEventListener('click', () => {
    getHumanChoise('Rock');
  });
paperBtn.addEventListener('click', () => {
  getHumanChoise('Paper');
  });
scissorsBtn.addEventListener('click', () => {
  getHumanChoise('Scissors');
  });

