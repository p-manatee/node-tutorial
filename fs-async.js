const {readFile,writeFile} = require('fs');
 console.log('staring a task');
 readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',`This is the result from asyncronus function that writes in file: ${first} , ${second}`,{flag:'a'},(err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log('finised task');
            
        });
    });
 });
 console.log('starting new task');