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
    let sheet = wb.addWorksheet(teams[i].team);

    sheet.cell(1,1).string("Rank");
    sheet.cell(1,2).string(teams[i].rank);

    for(let j=0; j <teams[i].matches.length; j++){
        sheet.cell(j+3,1).string(teams[i].matches[j].vs);
        sheet.cell(j+3,2).string(teams[i].matches[j].result);
    }
}

wb.write(args.dest);