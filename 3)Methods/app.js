/*String Methods*/
let str = "   hello   ";
console.log(str);  
str.trim();
console.log(str);


/* here str.trim is used to trim the spaces in starting and end of the string not middle
it creates the new string it doesnt change the original string so strings are immutable

from console 
str
'   hello   '
str.trim();
'hello'*/

/*This is used for example password doesnt accecpt spaces*/
//let password=prompt("Enter Your Password!  ");
//newpass=password.trim();
//console.log(password)   /*                  nithish
//nithish*/
//console.log(newpass);


/*To convert string to lower or upper case*/
let low=str.toLowerCase();
let up=str.toUpperCase();
console.log("THis is lowercase " + low);
console.log("THis is Uppercase " + up);




/*String Method with Arguments*/
/*indexOf*/
let msg="IloveCoding";
console.log("THis is the index " + msg.indexOf('l'));
console.log("THis is the index " + msg.indexOf('love')); //it shows on;y for the 1st letter love it gives
//index of l;
console.log("THis is the index ",msg.indexOf('J')); //it returns -1 for not found

/*Method Chaining*/
//it is used for using two or more methods
let mg="    hello   "
let mc = mg.trim().toUpperCase();
console.log(mc);


/*Slice :-Returns a part of the original string*/
let ab = "ChrisGayle"
console.log(ab.slice(0,5));
console.log(ab.slice(5));
console.log(ab.slice(-2)); //here it acts as length-(given negative number) 10-2=8 


/*Replace*/
let re = "Hibro"
console.log(re.replace("bro","sis"));
console.log(re.replace("H","h"));
/*Repeat*/
console.log(re.repeat(4));