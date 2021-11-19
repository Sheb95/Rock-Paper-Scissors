// ROCK PAPER SCISSORS 
function userNameInputed(userName) {
    user = true
    userName = prompt(`What is your username? (Please enter a username less than 10 characters)`);
    while(user)
        if(userName.length >= 10){
           alert("Invalid input.");
           userName = prompt(`What is your username? (Please enter a username less than 10 characters)`);
        } else { user = false;
                return userName;
           
    }

}

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
        console.log("Computer wins!");
    }else if(computerMove && playerMove === 'scissors'){
        console.log("It's a draw!");
    }
}



user = userNameInputed();


let isGameActive = true;

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0; 

while(isGameActive === true){
    
    let computer = computerChoices();

    let userInput = prompt("Rock, paper or scissors?")
    let result = getWinners(userInput, computer);

    if(result === 1){
        playerScore++;
        rounds++;
        alert(`${user} wins round ${rounds}! (${user}'s score: ${playerScore} points, Computer's score: ${computerScore} points.)`);
        
    }else if (result === -1){
        computerScore++;
        rounds++;
        alert(`${user} loses round ${rounds}! (${user}s score: ${playerScore} points, Computer's score: ${computerScore} points.)`);
        
    }else{
        alert(`It is a draw this round (${rounds})! (${user}'s Player's score: ${playerScore} points, Computer's score: ${computerScore} points.)`);
        rounds++;
    }


    let repeatGame = prompt("Would you like to play again?");
        if(repeatGame === 'no'){
            alert('Thanks for playing');
            if(playerScore > computerScore){
                alert(`${user} wins! (Final score: ${user}'s score: ${playerScore} points, Computer's score: ${computerScore} points.)`);
            }else if (playerScore < computerScore){
                alert(`Computer wins! (Final score: ${user}'s score: ${playerScore} points, Computer's score: ${computerScore} points.)`);

            }else{
                alert(`It's a draw! ${user}'s score: ${playerScore} points, Computer's score: ${computerScore} points.)`);
            }
        isGameActive = false;
        } 
    }


    
  


