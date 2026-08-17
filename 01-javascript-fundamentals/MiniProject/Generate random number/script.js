let secretNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

let attempts = 0;

function checkGuess() {
  const userGuess = Number(guessInput.value);

  // Validate input range
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.innerText = "Please enter a valid number between 1 and 100.";
    return;
  }

  // Increment and display attempts
  attempts++;
  attemptsDisplay.innerText = attempts;

  // Evaluate guess
  if (userGuess === secretNumber) {
    message.innerText = `Correct! You guessed the number in ${attempts} attempt(s)!`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
    resetBtn.style.display = "inline-block";

  } else if (userGuess < secretNumber) {
    message.innerText = "Too low! Try again.";
    
  } else {
    message.innerText = "Too high! Try again.";
  }

  // Clear input box
  guessInput.value = "";
}

function resetGame() {
  // Generate a new target number and reset state
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  // Reset UI elements
  attemptsDisplay.innerText = attempts;
  message.innerText = "";
  guessInput.value = "";

  // Re-enable input controls and hide reset button
  guessInput.disabled = false;
  guessBtn.disabled = false;
  resetBtn.style.display = "none";
}

// Event Listeners
guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

// Allow pressing 'Enter' key to submit guess
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !guessBtn.disabled) {
    checkGuess();
  }
});