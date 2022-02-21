// node FirstWritingJson.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);
/*
let s1 = {name:"Saumya",age:20}; //obj1
let s2 = {name:"Riya",age:15}; // obj2
let teams = [s1,s2]; //arr of objs
console.log(teams[1].name);
*/
let teams = [
    {
        team:"India",
        rank:1
    },
    {
        team:"Australia",
        rank: 2
    },
    {
        team: "England",
        rank: 3
    }
]

//let json = JSON.stringify(teams);
//fs.writeFileSync(args.dest,json,"utf-8");

fs.readFile(args.dest,"utf-8", function(err,res){
    if(err){
        console.log(err);
    }
    else{
        let teams = JSON.parse(res);
        console.log(teams[2].rank);
    }
})