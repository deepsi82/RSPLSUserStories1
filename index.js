"use stricts";

class Player{
    constructor(name){
        this.score = 0;
        this.name = name;
    }
}

class Ai extends Player{
    constructor(name){
        super(name);
    }
}
let player1 = new Player('Deepa');
let player2 = new Player('Sruthi');
console.log(player1);
console.log(player2);