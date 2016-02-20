'use strict';

const chalk = require("chalk");
const readlineSync = require("readline-sync");
const minimax = require("./minimax.es6");
const Board = require("./board.es6");

let log = console.log.bind(console);

// ------game----------------------------
let b = new Board();

while(b.getWinner() === "running"){

  b.move(b.X, getBestMove(b, b.X));
  b.print();

  if(b.getWinner() !== "running"){
    break;
  }

  let play = readlineSync.question('Enter a position 1-9:');

  b.move(b.O, parseInt(play, 10) - 1);
  b.print();

}

logWinner(b.getWinner());

//-----------------------------------------------------------------

function logWinner(w){
  switch (w) {
    case "X":
      log(chalk.green("Winner: Computer"));
      break;
      log(chalk.yellow("Winner: Human"));
      break;
    default:
      log("Tie");
  }
}

function getBestMove(b, player) {
  let posMoves = b.getMoves(),
    otherPlayer = (player === b.X ? b.O : b.X);

  let ratedMoves = posMoves
    .map((c, i) => {
      let boardCopy = b.copy();

      boardCopy.move(player, c);
      return [c, minimax(boardCopy, otherPlayer, 2, -1000, 1000)];
    })
    .sort((a, b) => { return b[1] - a[1] });



  //log(ratedMoves);
  let max = ratedMoves[0][1];
  let bestMoves = ratedMoves.filter((c, i) => {
    return c[1] >= max;
  });
  //log(bestMoves);

  return bestMoves[Math.floor(Math.random() * bestMoves.length)][0];

}

//comment
