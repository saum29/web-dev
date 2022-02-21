// node FirstProcessingHtml.js --source=download.html
// npm install jsdom

// Broswer reads the html sent by the server and presents it to the user                     

let minimist = require("minimist");
let fs = require("fs");
let jsdom = require("jsdom");

let args = minimist(process.argv);

fs.readFile(args.source,"utf-8", function(err,html){
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let btns = document.querySelectorAll("button");
    console.log(btns[0].textContent);
})