// //if we use async keyword it makes function to return promise
// async function greet(){
//     //we can use throw keywoard to throw errors
//     //throw "THIS IS AN ERROR"; 
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("THIS IS GREETING",result)
// })
// .catch((err)=>{
//     console.log("LOL",err)
// })


//Await keywoard pauses the execution of its surrounding async func

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     //here when we call the demo function it calls the getNum function
//     //we have given settime out functon first number prints after 1sec but remaining getNum prints continously
//     //without any second delay
//     //so to executes the thing after 1sec we can use await it pauses the other async functions
//     await getNum();
//     await getNum();
//           getNum();
// }



let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{    
    setTimeout(()=>{
        //to create an error
        let num=Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise rejected");
        }
        h1.style.color=color;
        console.log(`color changed to ${color}`);
        resolve("COlor changed");  
    },delay);
})
}

async function demo(){
    try{
    await changecolor("red",1000);
    //here in when an error throws the code stops on the line but further doesnt executes
    //to further execute code we can use try and catch

    await changecolor("green",1000);
    await changecolor("cyan",1000);
    await changecolor("yellow",1000);
    }
    catch(er){
        console.log(er);
    }

let a=5;
console.log(a);
console.log(a+3);
};