'use strict';

const chalk = require("chalk");
const readlineSync = require("readline-sync");
const minimax = require("./minmax.es6");
const Board = require("./board.es6");

let log = console.log.bind(console);
let b = new Board();

// ------game----------------------------
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

function logWinner(w){
  switch (w) {
    case "X":
      log("Winner: Computer")
      break;
    case "O":
      log("Winner: Human")
      break;
    default:
      log("Tie");
  }
}

/*let asyncLoop = function(func){

    let loop = function(){
        if(b.getWinner() !== "running"){
          let winner = b.getWinner();
          if(winner === "tie"){
            log("Tie");
          }else if (winner === b.X) {
            log("Winner: Computer")
          }else {
            log("Winner: Human");
          }
          return;
        }
        func(loop);
    };
    loop();//init
}

asyncLoop(function(loop){
    b.move(b.X, getBestMove(b, b.X));
    b.print();
    if(b.getWinner() === "running"){
      log("Enter position 1-9");
      prompt.start();
      prompt.get('play', function(err, result) {
        b.move(b.O, parseInt(result, 10) - 1);
        b.print();
        loop();
      });
    }else{
      let winner = b.getWinner();
      if(winner === "tie"){
        log("Tie");
      }else if (winner === b.X) {
        log("Winner: Computer")
      }else {
        log("Winner: Human");
      }
    }
});*/

//log(getBestMove(b, b.X));






function getBestMove(b, player) {
  let posMoves = b.getMoves(),
    otherPlayer = (player === b.X ? b.O : b.X);

  let ratedMoves = posMoves
    .map((c, i) => {
      let boardCopy = b.copy();

      boardCopy.move(player, c);
      return [c, minimax(boardCopy, otherPlayer, -1000, 1000)];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    });


  //log(ratedMoves);
  let max = ratedMoves[0][1];
  let bestMoves = ratedMoves.filter((c, i) => {
    return c[1] >= max;
  });
  //log(bestMoves);

  return bestMoves[Math.floor(Math.random() * bestMoves.length)][0];

}

//comment
