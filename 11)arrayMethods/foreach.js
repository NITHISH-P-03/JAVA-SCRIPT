/*Array MEthods*/
//For Each
let arr=[1,2,3,4,5];
print=function(el){  
    console.log(el);
}
arr.forEach(print);  //here for each takes single element and sends to print el


//by using arrow function
let lol=(el)=>{  
    console.log(el);
}
arr.forEach(lol);

//for array of objexts
let onj=[{
    name:"Nithish",age:"19"
},{name:"ABd",age:"41"},{name:"kane",age:"38"}];
onj.forEach((student)=>{
    console.log(student.age);
});