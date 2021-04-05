"use stricts";

const Player = require('./Player');
// const Human = require('./player');
// const Ai = require('./player');
// const Ai = require('./Ai');



const promptfor = require("prompt-sync")();

class Game{
    constructor(){
        this.playerOne = new Player.Human("Deepa");
        // this.playerTwo = new Player.Human("Sruthi");  //use this for multiple player human vs human

        this.playerTwo = new Player.Ai("Sruthi"); //use this for single player human vs Ai
        
    }
    
    runGame() {
        this.displayRules();
        
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
         
       this.playerOne.displayChoices();
       let playerOneInput = this.playerOne.humanChoice();
            
    //    this.playerTwo.displayChoices();
    //    let playerTwoInput = this.playerTwo.humanChoice();  //use this for multiple player human vs human

        let playerTwoInput = this.playerTwo.aiRandomChoice();

        if((playerOneInput === "rock" && playerTwoInput === "scissors") || 
        (playerOneInput === "scissors" && playerTwoInput === "paper") || 
        (playerOneInput === "paper" && playerTwoInput === "rock") || 
        (playerOneInput === "rock" && playerTwoInput === "lizard") || 
        (playerOneInput === "lizard" && playerTwoInput === "spock") || 
        (playerOneInput === "spock" && playerTwoInput === "scissors")||
        (playerOneInput === "scissors" && playerTwoInput === "lizard") ||
        (playerOneInput === "lizard" && playerTwoInput === "paper") ||
        (playerOneInput === "paper" && playerTwoInput === "spock") ||
        (playerOneInput === "spock" && playerTwoInput === "rock"))
        {
             this.playerOne.score += 1;
            console.log("PlayerOne score is : " + " " + this.playerOne.score);
        }
       
        else if
        ((playerOneInput === "scissors" && playerTwoInput === "rock") ||
        (playerOneInput === "paper" && playerTwoInput === "scissors") || 
        (playerOneInput === "rock" && playerTwoInput === "paper") || 
        (playerOneInput === "lizard" && playerTwoInput === "rock") || 
        (playerOneInput === "spock" && playerTwoInput === "lizard") || 
        (playerOneInput === "scissors" && playerTwoInput === "spock")||
        (playerOneInput === "lizard" && playerTwoInput === "scissors") ||
        (playerOneInput === "paper" && playerTwoInput === "lizard") ||
        (playerOneInput === "spock" && playerTwoInput === "paper") ||
        (playerOneInput === "rock" && playerTwoInput === "spock"))
        {
            this.playerTwo.score += 1;
             console.log("PlayerTwo score is : " + " " + this.playerTwo.score);
        }

         if
        ((playerOneInput === "rock" && playerTwoInput === "rock") || 
        (playerOneInput === "paper" && playerTwoInput === "paper") ||
        (playerOneInput === "scissors" && playerTwoInput === "scissors") ||
        (playerOneInput === "lizard" && playerTwoInput === "lizard") ||
        (playerOneInput === "spock" && playerTwoInput === "spock"))
        {
            console.log("No score for both ,play again");
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
        
