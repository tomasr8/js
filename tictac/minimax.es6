'use strict';
let log = console.log.bind(console);


let minimax = function(board, player, depth, a, b) {

  let winner = board.getWinner();

  //  the deeper we have to go for a winning state the lower score the AI gets,
  //  so it's motivated to always play the least amount of moves to win and
  //  vice versa, if lose is inevitable it plays as long as possible

  if(winner === board.X){ //terminal node = base case, only here can we evaluate the board position
    return 20 - depth;    // max depth is 9
  } else if (winner === board.O) {
    return -20 + depth;
  } else if (winner === "tie"){
    return 0; // no need to put 'depth' here, ties are alaways played till the board is full, there is no faster way
  }

  let posMoves = board.getMoves();

  if(player == board.X){
    let bestVal = -1000; // maximizing player

    for(let i = 0; i < posMoves.length; i++){ // player generated all possible moves and
      let boardCopy = board.copy();           // finds the maximum score by calling minimax on each of them

      boardCopy.move(board.X , posMoves[i]);

      let v = minimax(boardCopy, board.O, depth + 1, a, b);

      a = bestVal = Math.max(bestVal, v);

      if(b <= a) break; // b cut-off
    }
    return bestVal;

  }else{
    let bestVal = 1000;

    for(let i = 0; i < posMoves.length; i++){
      let boardCopy = board.copy();

      boardCopy.move(board.O, posMoves[i]);

      let v = minimax(boardCopy, board.X, depth + 1, a, b);

      b = bestVal = Math.min(bestVal, v);
      if(b <= a) break; // a cut-off
    }
    return bestVal;

  }
}

module.exports = minimax;


















//comment
