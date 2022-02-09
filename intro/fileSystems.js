let fs = require("fs");

//1. read file and show bin data
let buffer = fs.readFileSync("abc.js");
console.log(buffer);
console.log("Data - "+buffer);

//2. Open/Create file
fs.openSync("abc.txt","w");

//3. Write/Create - creates/overwrites
fs.writeFileSync("abc.txt","heelo There!");

//4. Update - TO add extra to existing files
fs.appendFileSync("abc.txt","\nIm Saumya");