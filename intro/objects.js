// same as dictionary - python, hashmap - java
// object -> group of key : value pair

//declare
let cap = {
    name : "Steve Rogers",
    age : 35,
    address:{
        city:"Manhatten",
        State:"New York"
    },
    isAvenger : true,
    movies : ["abc","pqr","xyz"],
    sayHi : function(){
        console.log("cap says hi!!");
    }
};

//get
/*console.log(cap.name);
console.log(cap.movies[1]);
console.log(cap.address[0]);
console.log(cap.isAvenger);*/

//set/update
cap.movies[3] = "added";
cap.isAvenger = false;
cap.age = 36;
//direct display
console.log(cap);

//delete
delete cap.age;
console.log(cap.age);

//iterative display of objects - for in loop
for(let key in cap){
    console.log(key,": ", cap[key])
}

let propKey = "address";
console.log(" ---- ",cap[propKey]);
// same as-
console.log(cap.address);
console.log(cap["address"]);