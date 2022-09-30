const { readFile,writeFile }= require('fs').promises;
// const util = require('util');
// const readFilePromised = util.promisify(readFile);
// const writeFilePromised = util.promisify(writeFile);


const start = async() => {

    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind-granade.txt',`This is Awesome : ${first} ${second}`,{ flag : 'a'});
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
    
    
}
start();

// const getText = (path) =>{
//     return new Promise ((resolve,reject)=>{
//         readFile(path,'utf8',(err,result)=>{
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }
