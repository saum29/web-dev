// npm install minimist
// node BigData.js --dest=f1.txt

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

console.log(args.dest);

let arr=[];

for(let i=0;i<50000000;i++){
    arr.push(i);
}

let str = arr.join("\n");
console.log(str);

fs.appendFileSync(args.dest, str,"utf-8");

