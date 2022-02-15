// Read from f1.txt and capitalize to f2.txt
// node FirstFiles.js --source=f1.txt --dest=f2.txt
// intsll minimist - reads args from cmd line
// fs is inbuilt so didnt install

let minimist = require("minimist");
let fs = require("fs"); 
let args = minimist(process.argv);

// read file
let stext = fs.readFileSync(args.source,"utf-8");

//capitalize
let dtext = stext.toUpperCase();

//write to f2.txt
fs.writeFileSync(args.dest,dtext,"utf-8");