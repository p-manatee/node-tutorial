const http=require('http');
const server = http.createServer((req,res)=>{
   if(req.url == '/'){
       res.end('Welcome to HOME PAGE!');
   }
   else if(req.url == '/about'){
       res.end('Welcome to ABOUT PAGE!');
   }else{
       res.end(`
       <h1>Ooops!</h1>
       <p>page that you are looking for does not exist!</p>
       <a href="/">back home</a>
   `);
   }
   
});
server.listen(5000);