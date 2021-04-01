"use strict";

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
} 
class Human extends Player{
    constructor(name){
        super(name);
    }
}  
        
class Ai extends Player{
    constructor(name){
        super(name);
    }
}  

module.exports = Player;
console.log(module);



