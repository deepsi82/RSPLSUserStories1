"use strict";

class Player{
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    }

   




}
    roundBasedPlayerScore(){
        let totalScore = 0;
        for(i= 0; i < 3; i++){
            totalScore += this.score;
            }
            return totalScore;
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