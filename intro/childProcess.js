let cp = require("child_process");
console.log("Calculator opening ...");
//open calculator, vscode, chrometab
//cp.execSync("calc"); 
//cp.execSync("code");
//cp.execSync("start chrome https:\\www.pepcoding.com");
let output = cp.execSync("node abc.js");
console.log("Calculator opened! "+output);


