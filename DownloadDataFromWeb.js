// node DownloadDataFromWeb.js --dest=download.html --url=https://www.cricbuzz.com/cricket-series/2697/icc-cricket-world-cup-2019/matches
// npm install axios

// import nexessary libraries
let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);
let axios = require("axios");

//get data from url
let didPromise = axios.get(args.url);
didPromise.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err){
    console.log(err);
})