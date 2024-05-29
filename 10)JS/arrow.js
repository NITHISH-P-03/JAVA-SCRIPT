const sum=(a,b)=>{
    console.log(a+b);
}
console.log(sum(1,3))

//cube for arrow functions
const cube=(n)=>{
    return n*n*n;
}
console.log(cube(2));

//Implicit return by using arrow function
//implicit ,it return without calling externally by return .
const cub=(n)=>(n*n*n);  //instead of curly we should use paranthesis
console.log(cube(2));


//Write a function that return the square n
const square= (n)=>{
    return n*n;
}
console.log(square(2));