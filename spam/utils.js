var fs = require("fs");

function read_classification_from_file(file){
  let p = new Promise((resolve, reject) => {

    fs.readFile(file, 'utf8', (err, data) => {
      if(err){
        reject(err);
      }
      resolve(data);
    });
  };

  return p;
}
