// default parameter assigns default value
function sum(a,b=1){
    return a+b;
}
console.log(sum(1)); //here assign a=1 and b=1
console.log(sum()); //here assign a=undefined and b=1 it gives NaN not a number

function sum1(c=1,d){
    return c+d;
}
console.log(sum1(1,5));
console.log(sum1(1));//here we get NaN because c=1 but d=undefined


//Math min

console.log(Math.min(999,99,32,1));  //the minimum value will be 1
console.log(Math.max(999,99,32,1));  //the max value will be 999

//Spread:-Expands an iterate into multiple values 
//syntax function func(...arr); ...denotes spread
arr=[1,23,45,2,6,78,2,0];
console.log(Math.min(...arr));

str="NITHISH";
console.log(...str); //it seperates the string

/*ARRAY LITERALS*/

let even=[2,4,6,8,10];
let odd =[1,3,5,7,9];
let nums=[...even,...odd];
console.log(nums);

/*OBJECT LITERALS*/
let data={
    email:"hamilton@gmail.com",pass:"abd"
}
let datacopy={...data,id:123};
console.log(datacopy);
let arr1=[1,2,3,4];
let obj1={...arr1};
console.log(obj1);

let obj2={..."hello"};
console.log(obj2);
