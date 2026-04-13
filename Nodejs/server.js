const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)
    res.setHeader('Content-Type','text/html')
    var path = './view'
    switch(req.url){
        case '/':   path += '/index.html'   
        break;
        case '/about':   path += '/about.html'
        break;  
        case '/about-me':   
            res.statusCode = 301
            res.setHeader('Location','/about')
            res.end()
        break;
        default:    path += '/404.html'
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)        }
        else{
            res.write(data)
            res.end()
        }})
    
});

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000')
})