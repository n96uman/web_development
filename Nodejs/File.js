const fs = require('fs');
// read 
fs.readFile('./docs/name.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
});
//write
fs.writeFile('./docs/name.txt','this is new name',(err)=>{
    if(err){
        console.log(err)}
    })
//directory
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err)    }})
//delete
if(fs.existsSync('./assets')){
    fs.unlink('./docs/name.txt',(err)=>{
        if(err){
            console.log(err)    }})
        }