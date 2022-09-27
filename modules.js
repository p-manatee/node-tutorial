// 1.intro 

// const amount=5;
// if(amount<=10){
//     console.log('Small number');
// }else{
//     console.log('Large number');
// }

// console.log(`Hello World lol!!!`);

// 2. GLOBALS

// console.log(__dirname);
// console.log(__filename);
// console.log(process);
// console.log(require);
// console.log(module);
// setInterval(() => {
//     console.log('Hello world!!');
// }, 1000);

// 3. MODULES

const {john,peter} = require('./module-names');
const sayHi = require('./utils');
// console.log(names);
const data = require('./alternative');
// require('./mind-granade');

console.log(data);
sayHi('susan');
sayHi(john);
sayHi(peter);
