"use stricts";

const Player = require('./Player');
let player = new Player();
// console.log(Player);

const prompt = require('prompt-sync')();
        
class Game{
    constructor(){
        this.playerOne = new Human("Deepa");
        this.playerTwo = new Human("Sruthi");
       

    }
    runGame(){
        // this.displayRules();
        this.playerOne = prompt("Enetr your Choice : ");
        this.playerTwo = prompt("Enetr your Choice : ");

        if(this.playerOne === "rock" && this.playerTwo === "scissors"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        else{
         if(this.playerOne === "scissors" && this.playerTwo === "rock"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "scissors" && this.playerTwo === "paper"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "paper" && this.playerTwo === "scissors"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "paper" && this.playerTwo === "rock"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "rock" && this.playerTwo === "paper"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "lizard" && this.playerTwo === "spock"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "spock" && this.playerTwo === "lizard"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "spock" && this.playerTwo === "scissors"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "scissors" && this.playerTwo === "spock"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "scissors" && this.playerTwo === "lizard"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "lizard" && this.playerTwo === "scissors"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "lizard" && this.playerTwo === "paper"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "paper" && this.playerTwo === "scissors"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "paper" && this.playerTwo === "spock"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "spock" && this.playerTwo === "paper"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }
        if(this.playerOne === "spock" && this.playerTwo === "rock"){
            this.playerOne.score = this.playerOne.score + 1;
            return runGame();
        }
        if(this.playerOne === "rock" && this.playerTwo === "spock"){
            this.playerTwo.score = this.playerTwo.score + 1;
            return runGame();
        }


    }
        
    }    
        
    
    
        
/*     displayRules() {
        console.log("Welcome to the RPSLS Game!");
        console.log("Minimum a 'best of three' to decide a winner");
        console.log("Rock crushes Scissors, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock ");
    }
 */






















    

     

