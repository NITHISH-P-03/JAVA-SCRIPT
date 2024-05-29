// //call stack check theory in book

// function hello(){
//     console.log("inside hello()")
//     console.log("Hello")
// }

// function demo(){
//     console.log("calling hello()");
//     hello();
// }

// console.log("Calling demo")
// demo();//here it is known as calling if function
// console.log("DOne Bye");


//Breakpoint  go to inspect then soruce select a line and the refresh select stepinto call func

function one(){
    return 1;
}

function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}

three();