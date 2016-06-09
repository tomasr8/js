var elems = [1, 2, 3],
    permutator = elems => {

  var perms = [],
      _perm = (elems, singleResult) => {
      if(elems.length === 0){
          perms.push(singleResult);
      }else{
          for(var i = 0; i < elems.length; i++){
              var e = elems.slice(); //copy elems
              e.splice(i, 1);
              _perm(e, singleResult + elems[i]);
          }
      }
  };

  _perm(elems, "");
  return perms;
};

var results = permutator(elems);

console.log(results);
console.log( results.map( c => c.split("") ) );
