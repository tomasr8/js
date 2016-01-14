'use strict';
const chalk = require("chalk");

let log = console.log.bind(console);

function Board() {

  this.empty = "-";
  this.X = "X";
  this.O = "O";

  this.state = this.empty.repeat(9).split("");

  this.winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ];


}

Board.prototype.copy = function() {
  let copy = new Board();
  for (let i = 0; i < this.state.length; i++) {
    copy.state[i] = this.state[i];
  }
  return copy;
};

Board.prototype.move = function(player, i) {
  if(this.state[i] === this.empty){
    this.state[i] = player;
  }
};

Board.prototype.getMoves = function() {
  let moves = [];

  this.state.forEach((c, i) => {
    if (c === this.empty) {
      moves.push(i);
    }
  });

  return moves;
};

Board.prototype.getWinner = function() {
  let winner = "running";

  for (let i = 0; i < this.winningStates.length; i++) {
    let a = this.state[this.winningStates[i][0]],
      b = this.state[this.winningStates[i][1]],
      c = this.state[this.winningStates[i][2]];

    if (a === b && a === c && a !== this.empty) {
      winner = a;
      break;
    }
  }

  if (winner === "running" && this.isFull()) {
    winner = "tie";
  }

  return winner;
};

Board.prototype.isFull = function() {
  return this.state.every((c, i) => {
    return c !== this.empty;
  });
}

Board.prototype.print = function() {
  let res = "";

  this.state.forEach((c, i) => {
    if(i%3 === 0){
      res += "|"
    }
    if(c === this.X){
      res += " " + chalk.green(this.X) + " ";
    }else if (c === this.O) {
      res += " " + chalk.yellow(this.O) + " ";
    }else{
      res += " " + this.empty + " ";
    }

    if(i%3 === 2){
      res += "|\n"
    }
  });

  log(res);
}

module.exports = Board;







//comment
