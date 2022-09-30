const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home page')
    }else if(req.url === '/about'){
        // BLOCKING CODE!!!
        for(let i = 0; i<=100;i++){
            for(let j = 0; j<=1000;j++){
                console.log(`i: ${i}, j: ${j}`);
            }
        }
        res.end('About Page');
    }else{
        res.end('Error page');
    }


});

server.listen(5000,()=>{
    console.log('Server Listening on port 5000 ...');
});