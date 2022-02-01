// array declare
let arr = [1,2,3,4,5];
let array = [];
console.log(arr);
//console.log(array);

//length
/*console.log(arr.length);
let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}*/
 
// unshift(),push()
arr.unshift("first val");
arr.push("last val");
console.log("added: ",arr);

//shift(),pop()
arr.shift();
arr.pop();
console.log(arr);

//slice - same as in python - copy of array
let part = arr.slice(1,4);
console.log(part);

//splice - better version of delete - changes in original array
//params- start idx, how many to del after that
arr.splice(2,4);
console.log(arr);

//indexof - ele kis index pe hai
//contains - ele hai ki nahi?

