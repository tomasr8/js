'use strict';

let iterTools = {};

iterTools.permutations = function* (elems, n) {
  if(n > elems.length) return false;

  function* _perm(elems, n, result) {
    if(n === 0){
      console.log(result);
      return result;
    }else{
      for(let i = 0; i < elems.length; i++){
        yield* _perm(elems.slice(0, i) + elems.slice(i + 1), n - 1, result + elems[i]);
      }
    }
  };

  for(let p of _perm(elems, n, "")){
    yield p;
  }

};

console.log(...iterTools.permutations("123", 4));
