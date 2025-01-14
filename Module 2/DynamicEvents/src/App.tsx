import './App.css'

function App() {
  /**
   * Handles the click event for the button.
   * Generates a random number, prompts user for input, and displays an alert.
   */
  function handleClick() {
    // Generate a random number between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);

    // Prompt user to guess the number
    let userInput = prompt("Guess a number between 1 and 3");

    // Display an alert with the computer's number and user's guess
    alert(`Computer number: ${randomNum} \nYour guess: ${userInput}`);
  }

  return (
    <>
      <div>
        <h1>Task: Add a button and handle a click</h1>
        {/* Button to trigger the handleClick function */}
        <button onClick={handleClick}>Guess a number between 1 and 3</button>
      </div>
    </>
  );
}

export default App
