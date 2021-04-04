"use strict";
const Player = require('./Player');

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
module.exports.Ai = Ai;