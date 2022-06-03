// Variable that asks players for their username;
let name = prompt("Please enter username");

let userName = prompt("Hello " + name + "welcome please select 1 or 2");


// functions for the guessing game at different stages
function checkGuess(myGuess) {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    let guess = prompt("guess a number between one and two");
    if (myGuess === randomNumber) {
        console.log("Your guess was correct! Guess again");
        return checkGuess2()
      } else if (myGuess !== randomNumber) {
        console.log("Your guess was " + myGuess + ". That's not correct. You lose!");
        return endGame()
      }else {
          console.log("Error!!! Choose a number between one and two");
      }
    
}

function endGame(playAgain) {
    if (playAgain == 1 ) {
        myGuess();
    }else {
        console.log("Thanks for playing");
    }
}



function checkGuess2(myGuess2) {
    const randomNumber2 = Math.floor(Math.random() * 3) + 1;
    let guess2 = prompt("guess a number between one and three");
    if (myGuess2 === randomNumber2) {
        console.log("Your guess was correct! Guess again");
        return checkGuess3();
      } else if (myGuess2 !== randomNumber2) {
        console.log("Your guess was " + myGuess2 + ". That's not correct. You lose!");
        endGame()
      }else {
          console.log("Error!!! Choose a number between one and three");
      }
}



function checkGuess3(myGuess3) {
    const randomNumber3 = Math.floor(Math.random() * 4) + 1;
    let guess2 = prompt("guess a number between one and four");
    if (myGuess3 === randomNumber3) {
        console.log("Your guess was correct! Guess again");
      } else if (myGuess3 !== randomNumber3) {
        console.log("Your guess was " + myGuess3 + ". That's not correct. You lose!");
        endGame()
      }else {
          console.log("Error!!! Choose a number between one and four");
      }
}

// calling the functions
checkGuess();
console.log(checkGuess(1));
