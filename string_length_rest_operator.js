

function strLength(name){
    return name.length;
}
 
// let result = strLength('shakti sharma');
// console.log(result);

// -- anonymous function

const add = function(...num){
    let sum=0;
    for(let i = 0; i < num.length; i++){
        sum = num[i] + sum;
    }
    return sum;
}
let result = add(5,6,8,4,0,2);
console.log(result);


// -- arrow function
const addition = (...num)=>{
    let sum=0;
    for(let i = 0; i < num.length; i++){
        sum = num[i] + sum;
    }
    return sum;
}
let result1 = addition(5,6,8,4,0,2,8);
console.log(result1);