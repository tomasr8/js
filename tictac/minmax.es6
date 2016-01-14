'use strict';
let log = console.log.bind(console);


let minimax = function(board, player, a, b) {

  let winner = board.getWinner();

  if(winner === board.X){ //terminal node
    //log("win: ", board.state);
    return 1;
  } else if (winner === board.O) {
    //log("lose: ", board.state);
    return -1;
  } else if (winner === "tie"){
    //log("tie: ", board.state);
    return 0;
  }

  let posMoves = board.getMoves();

  if(player == board.X){
    let bestVal = -1000;

    for(let i = 0; i < posMoves.length; i++){
      let boardCopy = board.copy();

      boardCopy.move(board.X , posMoves[i]);
      //log("running", board.state);

      let v = minimax(boardCopy, board.O, a, b);

      a = bestVal = Math.max(bestVal, v);
      if(b <= a) break; // b cut-off
    }
    return bestVal;

  }else{
    let bestVal = 1000;

    for(let i = 0; i < posMoves.length; i++){
      let boardCopy = board.copy();

      boardCopy.move(board.O, posMoves[i]);
      //log("running", board.state);

      let v = minimax(boardCopy, board.X, a, b);

      b = bestVal = Math.min(bestVal, v);
      if(b <= a) break; // b cut-off
    }
    return bestVal;

  }
}


module.exports = minimax;


















//comment
