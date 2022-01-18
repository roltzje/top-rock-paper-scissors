let pwin = 0;
let cwin = 0;
let gameCounter = 0;

const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

const results = document.createElement('div');
const score = document.createElement('div');
const endgame = document.createElement('div');

body.appendChild(results);
body.appendChild(score);
body.appendChild(endgame);


buttons.forEach(element => element.addEventListener('click', () => {
    let player = element.id;
    results.textContent = play(computerPlay(),player);
    score.textContent = "The score is Computer-" + cwin + ", Player-" + pwin;
    gameCounter++;
    endgame.textContent = gameCounter;
    if (pwin == 5 || cwin == 5) {
        buttons.forEach(element => element.disabled = true);
        if (pwin == 5) {
            endgame.textContent = "Game over, you won!";
        } else {
            endgame.textContent = "Game over, you lost!";
        }
    }
}));

function computerPlay () {
    let chooser = Math.floor(Math.random()*3);

    if (chooser == 0) {
        return "rock";
    } else if (chooser == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function play (computer, player) {
    player = player.toLowerCase();
    
    if (computer == player) {
        gameCounter--;
        return("The computer chose " + player + " too, you tied!")
    } else if (player == "rock") {
        if (computer == "paper") {
            cwin++;
            return("Computer chose " + h + ", you lost!");
        } else if (computer == "scissors") {
            pwin++;
            return("Computer chose scissors, you won!");
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            cwin++;
            return("Computer chose " + computer + ", you lost!");
        } else if (computer == "paper") {
            pwin++;
            return("Computer chose " + computer + ", you won!");
        }
    } else if (player == "paper") {
        if (computer == "scissors") {
            cwin++;
            return("Computer chose " + computer + ", you lost!");
        } else if (computer == "rock") {
            pwin++;
            return("Computer chose " + computer + ", you won!");
        }
    } else {
        gameCounter--;
        return("You must choose either rock, paper, or scissors");
    }
}  



/*
function game () {
    while (gameCounter < 5) {
        gameCounter++;
        let player = window.prompt ("Choose rock, paper, or scissors: ");
        console.log(play(computerPlay(),player));
        console.log(gameCounter + " " + cwin + " " + pwin);
    }   
}

if (pwin > cwin) {
    console.log("Congratulations, you won");
} else {
    console.log("Sorry, you lost");
}

console.log(game());
*/