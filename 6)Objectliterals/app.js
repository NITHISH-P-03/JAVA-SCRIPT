//Object Literals are used to store keyed collection and complex entites.
//properties=>(key,value)pair
//objects are  collection of properties
let student={
    name:"NIthish",
    age:"19",
    roll:"17"
}
console.log(student);//array of objects
//here we can give write an array
//let student2=["Nithish","19","17"]; herein aray there is no clarity but object 
//will have good clarity
//objects dont have any specific order
//objects are mutable
//objects are dynamic
//objects are reference type

const item={
    price:"10$",
    it:"3",
    colors:["RED","BLACk"]
}
console.log(item);

//To access the certain value objectname["key"];
console.log(item["price"]);
//console.log(`the price value ${item["price"]}`);
//To access the certain value object.name;
console.log("THis is using dot operator"+item.price);


// let obj={
//     1:"hi",2:"bye",null:'Null',arr:['gold','silver']
// }
// console.log(obj[1],obj.arr[0]);
//To update or add value

student.name="Abdevilliers";//It is used to update he value
student.team="RCB";
console.log("This is after adding and new student")
console.log(student);
delete student.team;//It is used to delete the value
console.log("This is after deleting the team")
console.log(student);


console.log("-----------Nested objects----------")
//Nested Onjects or object of object
// const classinfo={
//     nithish:{team:"RCB",roll:"17"},
//     ab:{team:"CSK",roll:"18"},
//     vk:{team:"DC",roll:"19"}
// }
// console.log("THis is Nithish:",classinfo.nithish);
// console.log(classinfo.nithish.team);
// console.log(classinfo.ab.roll);

//Array of Objects
console.log("----------Array of Objects--------")
const classinfo=[
         nithish={team:"RCB",roll:"17"},
         ab={team:"CSK",roll:"18"},
         vk={team:"DC",roll:"19"}
]
console.log(classinfo[0]);
console.log(classinfo[0].team);
classinfo[1].captain="MSD";// To add
console.log(classinfo[1]);