// node FirstExcel.js --source=teams.json --dest=teams.xlsx
// npm init
// npm install minimist (sep folder)
// npm install excel4node

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");

let args = minimist(process.argv);

let teamsJson = fs.readFileSync(args.source,"utf-8");
let teams = JSON.parse(teamsJson);

let wb = new excel.Workbook();
for(let i=0;i<teams.length;i++){
    
}