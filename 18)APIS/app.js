//Accessing the Data from JSON
//{"fact":"A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.","length":116}
//here the above is result from api in the form of JSON

let JosRes='{"fact":"A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.","length":116}';
//here JSON.parse is a string in javascript so to convert in js object we are using JSON.parse
let ValidREs=JSON.parse(JosRes);
console.log(ValidREs);


//and to convert js object into json string
let stu={
    name:"NITHISH",age:"15"
}

console.log(JSON.stringify(stu));
//JSON.stringify is used to convert js object to JSON string
