/*Scope
Scope determines the accessibiliety of a variable objects and functions from different parts
of the code
Types of Scope
1)Function Scope 2)Block Scope 3)Lexical Scope 4)Global Scope
Function Scope:- Variable defined inside a function are not accessible from outsidde the function
But function can use the variable outside the function*/
let sum=54;//Global scope
function calc(a,b){
    //let sum=a+b;//Function Scope  
    //WHen the above line commented out the answer will be 54 because it can assecc the global scope
    console.log(sum);
}
console.log(calc(1,3));
console.log(sum);
    


console.log("----------------------------");


//BLock Scope:-
/*Block Syntax:-{ 
    code//
}
*/

// {
//     let a=25;
// }
// console.log(a);

// here in block scope we cannot access variable outside the block
//it will give error if you run the above code


// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }
//here it gives error when we print the variable outside the block
//console.log(i); error


//Lexical Scope
//A variable define outside a function can be accessible inside another function 
//defined after the variable declaration

function outerfunc(){
    let x=5;
    let y=4;
    function innerfunc(){
        console.log(x); //THis is lexical scope because it uses variable from outefunc
        console.log(y);
    }
    innerfunc();
}


//here the below code we can see first the inner function is declared and then variables are dclared
//even though we get output this is called hoisting
// function outerfunc(){
//     function innerfunc(){
//         console.log(x); //THis is lexical scope because it uses variable from outefunc
//         console.log(y);
//     }
//     let x=5;
//     let y=4;
   
//     innerfunc();
// }
outerfunc();


//from inner  funct to outer func variable cannot be accessed it can be only possible only fromouter to inner



//Tpye to Write the function 
let name=function(){
    console.log("Nithish");
}

let sub=function(a,b){
    su=a-b;
    console.log(su);
}

name();
sub(5,3);