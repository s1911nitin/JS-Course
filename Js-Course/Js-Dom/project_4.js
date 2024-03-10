
let randomNumber = Math.floor(Math.random()*100) + 1;

let fm = document.querySelector("form");
let userInput = document.querySelector("#guessField");
let guessesSlot = document.querySelector(".guessesSlot");
let remainingCount = document.querySelector(".remainingCount");
let message = document.querySelector(".lowOrhigh");
let startOver = document.querySelector(".resultParas");

let guessessArray = [];

let p = document.createElement("p");

let guessCount = 1;

let playgame = true;

if (playgame) {
    fm.addEventListener("submit", function (e) {
        e.preventDefault();

        let user_guess = Number(e.target.guessField.value);
        validateGuess(user_guess);

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Not a valid number.")
    } else if (guess <=0) {
        alert("Number must be in a range 1 to 100 including (1,100).")
    } else if (guess >100) {
        alert("Number must be in a range 1 to 100 including (1,100).")
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
    
}


function displayGuess(guess) {
    userInput.value = ""
    guessessArray.push(guess)
    let slot_result = guessessArray.join(",");
    guessesSlot.innerHTML = slot_result;
    remainingCount.innerHTML = `${10-guessCount}`
    guessCount +=1

    if (guessCount === 11) {
        endGame();
    }
}

function checkGuess(guess) {
    if (guess < randomNumber) {
        displayMessage("Guess number is lower than random actual number.")
    } else if (guess > randomNumber) {
        displayMessage("Guess number is greater than random actual number.")
    } else if (guess === randomNumber) {
        displayMessage(`You guessed the right number: ${guess}`)
        endGame()
    }
}

function displayMessage(msg) {
    message.innerHTML = msg;
}

function endGame() {
    userInput.setAttribute("disabled", "");
    playgame = false;
    p.innerHTML = "<span id='newGame'>Start new game</span>";
    startOver.appendChild(p);
    newGame();
}

function newGame() {
    document.querySelector("#newGame").addEventListener("click", function (e) {
        e.preventDefault();
        randomNumber = Math.floor(Math.random()*100) + 1;
        userInput.removeAttribute("disabled", "");
        guessCount = 1;
        playgame = true;
        guessessArray = [];
        guessesSlot.innerHTML = "";
        remainingCount.innerHTML = 10;
        message.innerHTML = "";
        startOver.removeChild(p);
    })
}






