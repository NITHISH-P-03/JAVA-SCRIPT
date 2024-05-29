// //Math Object
// console.log(Math.PI);
// console.log(Math.abs(-3)); //abs gives absolute thing
// console.log(Math.pow(2,4)); //A^B 2^4
// console.log(Math.floor(4.9));//it gives round of small number
// console.log(Math.floor(-5.5));//it gives round of small number
// console.log(Math.ceil(5.5));//it gives round of largest number
// console.log(Math.random())//leving 1 it doesnt give it gives random  value
// //here random function generates random numbers within 0-1

//TO generate random numbers from 1-10
let step1=Math.random();
let step2=step1*10;
let step3=Math.floor(step2);
//let step4 = step2+1;
console.log(step3); //or
//singleline for 1-10 random integer
console.log(Math.floor(Math.random()*10));
//here we can only get number till 9 to get 10 we should add 1
//to get range from 1-99
console.log(Math.floor(Math.random()*100+1));
//to get range from 1-5
console.log(Math.floor(Math.random()*5+1));
//to get range from 21-25
console.log(Math.floor(Math.random()*10+20));