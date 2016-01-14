'use strict';
let log = console.log.bind(console);

let state2 = { "terminal": true,
               "winner": 1 },
    state3 = { "terminal": true,
               "winner": -1 },
    state1 = { "terminal": false,
               "nodes": [state2, state3] };

function minimax(state, player, a, b){
  if(state.terminal){
    return state.winner;
  }

  if(player == "X"){
    let bestVal = -1000;
    for(let child of state.nodes){
      let v = minimax(child, "O", a, b);

      a = bestVal = Math.max(bestVal, v);
      if(b <= a) break; // b cut-off
    }
    return bestVal;
  }else{
    let bestVal = 1000;
    for(let child of state.nodes){
      let v = minimax(child, "X", a, b);
      b = bestVal = Math.min(bestVal, v);
      if(b <= a) break; // a cut-off
    }
    return bestVal;
  }
}

log(minimax(state1, "X", -1000, 1000));




//comment
