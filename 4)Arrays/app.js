//String array
let stu = ["virat","Nithish","Ab"]
console.log(stu[1]);
console.log(stu.length);
console.log(stu[0][2]); //it first access the string and later the letters in that string
//num array
let num = [1,2,3];
//mixed array
let mix=["nithish",2,2.99];
console.log(mix[2]);
//here in js we can used mixed type of elements but it doesnt work in C++ and java
//Empty array
let emp=[];
console.log(emp);

/*Arrays are mutable as this change is permanent in oraiginal array but not as like String*/
let fruits =["Apple","ORange","Lol"];
fruits[0]="Banana";
fruits[7]="Pine";
console.log(fruits);
console.log(fruits.length);



let cars =["Toyota","AUdi","jaguar","Bmw"];
//push= add to end        Unshift=add to start
//pop=delete from end & returns it      Shift=delete from start & returns it
cars.push("Mercedes");
console.log(cars);

console.log(cars.pop()); //Pop returns the last from the array and deletes it

cars.unshift("RedBull");
console.log(cars);

console.log(cars.shift());



/*indexOf:Return index of something
include:Search for a value*/
let primary=["Red","Yellow","Blue"];
console.log(primary.indexOf("Yellow"));
console.log(primary.includes("black"));



/*Array Methods
COncatenation :- to merge 2 arrays  (concat)
Reverse:-To reverse an array (reverse)*/
let pri=["Red","Yellow"];
let sec=["silver","white","Black","Gold","lavender","violet"];
console.log(pri.concat(sec)); 
console.log(pri.reverse()); 

//SLice:Copies a portion
console.log("for copy slice",sec.slice());
console.log(sec.slice(2));
console.log(sec.slice(3,5));
console.log(sec.slice(-2));


//Splice:removes/replace/add
//splice(start,deletecount,item0...itemN)


console.log(sec.splice(3));
console.log(sec);

console.log(sec.splice(0,1));
console.log(sec);

console.log(sec.splice(0,0,"grey","silver"));  //splice(0(position),0(deletion),"black"(add),"silver"(add)))
console.log(sec)

console.log(sec.splice(1,0,"lavender"));
console.log(sec);


//SOrt :-it sorts the array in ascending order(but only for strings and alphabets)
console.log(sec.sort());


//Constant array
//strings
const a =5; //we cant reasign the values for a it is constant

const arr = [1,2,3];
//here we can do array operations like push,pop but with the same name we cant rewrite the new array;


/*Multidimensional Array*/
let multi = [[1,2],[3,4,6],[5,6]];
console.log(multi);
console.log(multi[0][1]);
console.log(multi[1].length);