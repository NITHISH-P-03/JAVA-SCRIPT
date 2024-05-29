/*Destructuring Storing values of array in multiple variables*/
// let names=["tony","bruce","cap"];
// let[Robert,batman,steve]=names;
// console.log(Robert,batman);

//if it has more variables we can use rest function
let names=["tony","bruce","cap","spider","blackwom","dune","lol"];
let[Robert,batman,steve,...others]=names;//...others stores the other eleemnts from array
console.log(...others);
console.log(batman);


//Destructuring Objects
let student={
    name:"Nithish",age:"31",class:"ECE",
    subjects:["hindi","English","Kannada"],
    username:"lol",password:"123"
}

let {username:user,password:pass,city="Bangalore"}=student;
//here city is used to assign new varibvale
//here instead of username we use user similarly for pass
console.log(user);
console.log(username);//it gives undefined as we did as user