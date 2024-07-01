function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "Rock"
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  if (humanChoice === "rock") {
    return "Rock";
  } else if (humanChoice === "paper") {
    return "Paper";
  } else if (humanChoice === "scissors") {
    return "Scissors";
  } else {
    return alert("Enter a valid choice");
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return alert(`It's a tie! Both chose ${computerChoice}.`);
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      humanScore++;
      return alert(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      humanScore++;
      return alert(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      humanScore++;
      return alert(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      return alert(`You losse! ${computerChoice} beats ${humanChoice}.`);
    }
  }
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore === computerScore) {
    alert(`It's a draw! Human score: ${humanScore} Computer score: ${computerScore}`);
  } else if (humanScore > computerScore) {
    alert(`You win the game! Human score: ${humanScore} Computer score: ${computerScore}`);
  } else {
    alert(`You lose the game! Computer score: ${computerScore} Human score: ${humanScore}`);
  }
}

playGame()
