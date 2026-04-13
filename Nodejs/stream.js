const fs = require('fs');

const readstream = fs.createReadStream('./docs/name.txt');

readstream.on('data',(chunk)=>{
    console.log(chunk.toString())
});
