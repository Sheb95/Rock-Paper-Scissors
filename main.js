// ROCK PAPER SCISSORS 


let playerMove = "scissors";
let computerMove = "scissors";

//playerMove = paper
if(playerMove === 'paper' && computerMove === 'scissors'){
    console.log("computer Wins!!");
} else if(playerMove === 'paper' && computerMove === 'rock'){
    console.log("player Wins")
} else if(playerMove === 'paper' && computerMove ==='paper' ){
    console.log("It's a Draw!")
}

//playerMove = rock
else if(playerMove === 'rock' && computerMove === 'paper'){
    console.log('Computer Wins!');
}else if(playerMove === 'rock' && computerMove === 'scissors'){
    console.log('Player wins!');
}else if(playerMove === 'rock' && computerMove === 'rock'){
    console.log("It's a Draw!");
}
//PLAYER MOVE - SCISSORS
else if(playerMove === 'scissors' && computerMove === 'rock'){
    console.log("Computer Wins!");
}else if(playerMove === 'scissors' && computerMove === 'paper'){
    console.log("Player Wins!");
}else if (playerMove && computerMove ==='scissors'){
    console.log("It's a draw!");
}

//COMPUTER MOVE - ROCK
else if(compMove === 'rock' && computerMove === 'paper'){
    console.log("player Wins!");
}else if(compMove === 'rock' && computerMove === 'scissors'){
    console.log("player Wins!");
}else if (compMove && computerMove ==='rock'){
    console.log("It's a draw!");
}