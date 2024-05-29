let arr=[1,2,3,4];
let double=arr.map((el)=>{
    return 2*el;

})
console.log(double);

//map function applies the function for each elemetn in an array and print as an new array

let onj=[{
    name:"Nithish",age:"19",marks:"90"
},{name:"ABd",age:"41",marks:"91"},{name:"kane",age:"38",marks:"95"}];
let gpa =onj.map((student)=>{
    return student.marks/10;
});

console.log(gpa);