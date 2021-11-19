// ROCK PAPER SCISSORS 

function computerChoices(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(choices.length* Math.random())];
        return randomChoice;
}


function getWinners(playerMove, computerMove) {
//playerMove = paper
    if(playerMove === 'paper' && computerMove === 'scissors'){
        return -1;
    } else if(playerMove === 'paper' && computerMove === 'rock'){
        return 1;
    } else if(playerMove === 'paper' && computerMove ==='paper' ){
        return 0;
    }

    //playerMove = rock
    else if(playerMove === 'rock' && computerMove === 'paper'){
        return -1;
    }else if(playerMove === 'rock' && computerMove === 'scissors'){
        return 1;
    }else if(playerMove === 'rock' && computerMove === 'rock'){
        return 0;
    }
    //PLAYER MOVE - SCISSORS
    else if(playerMove === 'scissors' && computerMove === 'rock'){
        return -1
    }else if(playerMove === 'scissors' && computerMove === 'paper'){
        return 1
    }else if (playerMove && computerMove ==='scissors'){
        return 0
    }

    //COMPUTER MOVE - ROCK
    else if(computerMove === 'rock' && playerMove === 'paper'){
        console.log("player Wins!");
    }else if(computerMove === 'rock' && playerMove === 'scissors'){
        console.log("computer Wins!");
    }else if (computerMove && playerMove ==='rock'){
        console.log("It's a draw!");
    }
    //COMPUTER MOVE = PAPER
    else if(computerMove === 'paper' && playerMove === 'scissors'){
        console.log("Player wins!");
    }else if(computerMove === 'paper' && playerMove === 'rock'){
        console.log("Computer wins");
    }else if(computerMove && playerMove === 'paper'){
        console.log("It's a draw!");
    }

    // COMPUTER MOVE = SCISSORS

    else if( computerMove === 'scissors' && playerMove === 'rock'){
        console.log("Player wins!");
    }else if(computerMove === 'scissors' && playerMove === 'paper'){
        console.log("Computer wins");
    }else if(computerMove && playerMove === 'scissors'){
        console.log("It's a draw!");
    }
}

let computer = computerChoices();
console.log(computer);

/*let userInput = prompt("Rock, paper or scissors?")
let result = getWinners(userInput, "scissors");

if(result === 1){
    alert("Player 1 wins!");
}else if (result === -1){
    alert("Player 1 is a big loser!");
}else{
    alert("It is a draw!");
}*/



