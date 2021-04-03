"use strict";
const promptfor = require("prompt-sync")();


class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    displayChoices(){
       console.log(this.gesture);
    }
} 
class Human extends Player{
    constructor(name){
        super(name);
    }
    humanChoice() {
           let playerInput = promptfor(this.name + " " + "gesture choices : ");
            return playerInput; 
    }     
} 
    
module.exports.Player = Player;
module.exports.Human = Human;

console.log(module);

        





