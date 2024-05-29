// Try:try statement allows you to define a block of code to be tested for errors whileit is being executed
// Catch:Catch statement allows you to define a block of code to be executed if an eror occurs in try bblock

console.log("hi");
console.log("this is try and catch");
//here a is not defined so error will show and below code hi and hi21 doesnt execute to get executed
try{
    console.log(a);
}
// catch{
//     console.log("Mental first define a");
// }
//to know what error we can write catch as function
catch(err){
    console.log("Mental first define a");
    console.log(err); //here it prints the error

}
console.log("hi");
console.log("hi21");