const http = require('http');
// without events
// const server = http.createServer((req,res)=>{
//     res.end('Welcome');
// })

// with events
// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome');
});

server.listen(5000);