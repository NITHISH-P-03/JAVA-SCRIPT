//Function is a peice of code to perform specific task
function line(){
    console.log("-----------------------------------");
} 

function hello(){
    console.log("HELLO");
    console.log("THis is used by fuction");
}

hello();

let j=5;
function table(){
    for(let i = 1;i<=10;i++){
        console.log(j + '*' + i +"=" +(j*i));
    }

}
table();
line();


//Function with arguments
//argumnets are values that are passed inside a function or bracket

function print(name){
    console.log(name);
}
print("Nithish");

line();

//tables using arguments 

function table(num){
    for(let i = 1;i<=10;i++){
        console.log(num + '*' + i +"=" +(num*i));
    }

}
table(6);
line();

//aaGE AND NAME
function info(name,age){
    console.log(`your name is ${name} and age is ${age}`);
}
info("Nithish",20);
//here when one parameter is not passed code will show undefined.
info("ABD");
info(14);//here when we pass number it doesnt store in age it doesnt detect it store as name

line();
//SUm of Two numbers
// function sum(a,b){
//     add=a+b;
//     console.log(add);
// }
// sum(1,3);


//Return Keyword :-Return keyword is used to return some value from the function

function sum(a,b){
    return a+b;
    console.log(a+b);//here this code will not print because after return value no code executes
}

//sum(1,2);  //here it doesnt print because console.log is not used but when we call sum(1,2) in console tab we can 
//get answer but here we should use cosole
console.log(sum(sum(1,2),3));  //(1+2=3,3=6)


line();

//Write a function which return sum from 1 to n;
function add(n){
    let ap=0;
    for(let i=0;i<=n;i++){
        ap=ap+i;
        console.log(ap);
        //reutrn ap; it works on console
    }
}
console.log(add(5));


//Write a function to concatenate the strng of an array
let str=["A","B"," ","DEVLLIERS"];
function arr(str){
    let result="";
    for(let i=0;i<=str.length;i++){
        result=result+str[i];
    }
    console.log(result);
}

arr(str);