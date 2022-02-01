let singleQuote = 'single quotes ki string';
let doubleQuote = "double quotes";

/*console.log(singleQuote);
console.log(doubleQuote);

let char = singleQuote.charAt(4); //still treated as string only
let ascii = singleQuote.charCodeAt(4); // return ascii val
let subs = singleQuote.substring(2,8); // 2 to 7 incl spaces

console.log(char);
console.log(ascii);
console.log(subs);*/

//split 
let splitted = singleQuote.split("i"); //split whenevr enconters i
console.log(splitted);
let splitted2 = singleQuote.split(""); //splits each char
//console.log(splitted2);

//join
let str = splitted.join("$");
console.log(str);

//trim - removes extra white spaces in beginning and end
let string = "  how r you    ";
let spl = string.split(" ");
let trim = string.trim();
console.log(spl);
console.log(trim);