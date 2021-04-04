"use strict";
const promptfor = require("prompt-sync")();


class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
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
           let playerInput = promptfor(this.name + "'s " + " " + "gesture choices : ", Player.chars);
            return playerInput; 
    }  
    chars(input){
        return true; 
    }


} 
    
class Ai extends Player{
    constructor(name){
        super(name);
    }
    aiRandomChoice() {
        let randomChoice = this.gesture[Math.floor(Math.random()*this.gesture.length)];
        console.log(randomChoice);
        return randomChoice;
    }     
}  


module.exports.Player = Player;
module.exports.Human = Human;
module.exports.Ai = Ai;