//q1. prime no?

let num = 4;
let flag = true;
for(let i=2; i*i<=num;i++){
    if(num%i == 0){
        flag = false;
        break;
    }
}
if(flag == true){
    console.log(num, " is prime");
}
else{
    console.log(num, "is not prime");
}

// functions
// no need to specify param type, return type

function sayHi(param){
    //console.log("Hello");
    //console.log(param);
    let val = Math.random()>0.5?true:"less";
    return val;
}

//sayHi(10);
let ans = sayHi([1,2,3,3,4]);
console.log(ans);
