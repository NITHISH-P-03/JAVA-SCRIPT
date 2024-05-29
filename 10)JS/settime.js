//Set timeout used to set time for code execution
//setTimeout(function,timeout)  here timeout is taken in millisecond 1000ms=1s


console.log("Hi Nithish");
setTimeout(()=>{
    console.log("This is setTime Func")
},4000);  //this is timeout func
console.log("Wlcome");


//setInterval is similar to above but it keeps on printting on particular interval like 2sec
let id=setInterval(()=>{
    console.log("This is setinterval Func")
},2000);  //this is timeInerval func

//to stop printting  clearinterval(id); it works only in console

//write a function the prints hello world 5 times in interval of 5 sec
let lol=setInterval(()=>{
    console.log("it prints after 2 sec")
},2000);

//2,4,6,,8,10 mafter 10sec it shld stop

setTimeout(()=>{
    clearInterval(lol)
},10000);  //10000=10sec