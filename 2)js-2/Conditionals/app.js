//Switch Statement
console.log("hi");
let color="black";

switch (color) {
    case "black":
        console.log("You have chosen black");
        break;
    case "red":
        console.log("red");
    default:
        console.log("LOl");
}


//If statement
num= 2;
if((num%10==0)){
    console.log("good");
}
else{
    console.log("bad");
}


let str ="apples";
if((str[0]=='a' || str[0]=='A') && (str.length>5)){
    console.log("Golden String");
}
else{
    console.log("worst");
}