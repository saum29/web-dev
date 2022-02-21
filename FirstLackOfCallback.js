// node FirstLackOfCallbacks.js --source=f1.txt --dest=f2.txt --n=50000
// Js is single threaded but noed isnt

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

function isPrime(n){
    for(let i=2;i*i<=n;i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

// task 1 area
let t1 = Date.now();
console.log("Task1 Started at - " + t1 % 10000);
let data = fs.readFileSync(args.source,"utf-8");

let t2 = Date.now();
console.log("Task1 ended at - "+t2 % 10000);
console.log(t2-t1);

//task 2 area
let t3 = Date.now();
console.log("Task2 Started at - "+t3 % 10000);

let arr = [];
for(let i=2;i<args.n;i++){
    if(isPrime(i) == true){
        arr.push(i);
    }
}
let t4 = Date.now();
console.log("Task2 ended at - "+t4 % 10000);
console.log(t4-t3);

/*fs.readFile(args.source, function(data){
let t4 = Date.now();
console.log("Task2 ended at - "+t4 % 10000);
console.log(t4-t3);
});*/
