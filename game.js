"use stricts";

const Player = require('./Player');
const Human = require('./player');

// let player = new Player();

const promptfor = require("prompt-sync")();

class Game{
    constructor(){
        this.playerOne = new Player.Human("Deepa");
        this.playerTwo = new Player.Human("Sruthi");
        
    }
    
    runGame() {
        this.displayRules();
        
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
         
       this.playerOne.displayChoices();
       let playerOneInput = this.playerOne.humanChoice();
            
        this.playerOne.displayChoices();
        let playerTwoInput = this.playerTwo.humanChoice();

        if(playerOneInput === "rock" && playerTwoInput === "scissors"){
            this.playerOne.score += 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);
        }
        else{
         if(playerOneInput === "scissors" && this.playerTwoInput === "rock"){
            this.playerTwo.score += 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);
        }
        if(playerOneInput === "scissors" && playerTwoInput === "paper"){
            this.playerOne.score += 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);
        }
        if(playerOneInput === "paper" && playerTwoInput === "scissors"){
            this.playerTwo.score += 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);
        }
        if(playerOneInput === "paper" && playerTwoInput === "rock"){
            this.playerOne.score += 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);
        }
        if(playerOneInput === "rock" && playerTwoInput === "paper"){
            this.playerTwo.score += 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);
        }
        if(playerOneInput === "rock" && playerTwoInput === "lizard"){
            this.playerOne.score = this.playerOne.score + 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);

        }
        if(playerOneInput === "lizard" && playerTwoInput === "rock"){
            this.playerTwo.score = this.playerTwo.score + 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);

        }
        if(playerOneInput === "lizard" && playerTwoInput === "spock"){
            this.playerOne.score = this.playerOne.score + 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);

        }
        if(playerOneInput === "spock" && playerTwoInput === "lizard"){
            this.playerTwo.score = this.playerTwo.score + 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);

        }
        if(playerOneInput === "spock" && playerTwoInput === "scissors"){
            this.playerOne.score = this.playerOne.score + 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);

        }
        if(playerOneInput === "scissors" && playerTwoInput === "spock"){
            this.playerTwo.score = this.playerTwo.score + 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);

        }
        if(playerOneInput === "scissors" && playerTwoInput === "lizard"){
            this.playerOne.score = this.playerOne.score + 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);

        }
        if(playerOneInput === "lizard" && playerTwoInput === "scissors"){
            this.playerTwo.score = this.playerTwo.score + 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);

        }
        if(playerOneInput === "lizard" && playerTwoInput === "paper"){
            this.playerOne.score = this.playerOne.score + 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);

        }
        if(playerOneInput === "paper" && playerTwoInput === "lizard"){
            this.playerTwo.score = this.playerTwo.score + 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);

        }
        if(playerOneInput === "paper" && playerTwoInput === "spock"){
            this.playerOne.score = this.playerOne.score + 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);

        }
        if(playerOneInput === "spock" && playerTwoInput === "paper"){
            this.playerTwo.score = this.playerTwo.score + 1;
            console.log("PlayerTwo score is : " + " " + this.playerTwo.score);

        }
        if(playerOneInput === "spock" && playerTwoInput === "rock"){
            this.playerOne.score = this.playerOne.score + 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);

        }
        if(playerOneInput=== "rock" && playerTwoInput === "spock"){
            this.playerTwo.score = this.playerTwo.score + 1;
            
        }
        if(playerOneInput === "rock" && playerTwoInput === "rock"){
            console.log("there is a tie,play again");
        }
        if(playerOneInput === "paper" && playerTwoInput === "paper"){
            console.log("there is a tie,play again");
        }
        if(playerOneInput === "scissors" && playerTwoInput === "scissors"){
            console.log("there is a tie,play again");
        }
        if(playerOneInput === "lizard" && playerTwoInput === "lizard"){
            console.log("there is a tie,play again");
        }
        if(playerOneInput === "spock" && playerTwoInput === "spock"){
            console.log("there is a tie,play again");
        } 

    }
}

this.displayGameWinner();
}

displayRules(){
    console.log("Welcome to the RPSLS Game!");
    console.log("Minimum a 'best of three' to decide a winner");
    console.log("Rock crushes Scissors, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock ");
}


displayGameWinner() {
    if(this.playerOne.score > this.playerTwo.score) {
        console.log(this.playerOne.name + " wins this game! with the score of " + this.playerOne.score);
    }
    else {
        console.log(this.playerTwo.name + " wins this game! with the score of " + this.playerTwo.score);
    }
}

}

  module.exports = Game;        
 

