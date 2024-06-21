document.title = "Snake water game";
function getComputerChoice() {
  const choices = ["s", "w", "g"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === "s" && computerChoice === "w") ||
    (userChoice === "w" && computerChoice === "g") ||
    (userChoice === "g" && computerChoice === "s")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function playGame() {
  let playAgain = true;

  while (playAgain) {
    const userChoice = prompt(
      "Enter 's' for Snake, 'w' for Water, or 'g' for Gun:"
    );

    if (!["s", "w", "g"].includes(userChoice)) {
      alert("Invalid input! Please enter 's', 'w', or 'g'.");
      continue;
    }

    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);
    alert(result);

    playAgain = confirm("Do you want to play again?");
  }
}

playGame();
