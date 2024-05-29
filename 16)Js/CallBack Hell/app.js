// let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         nextcolor();
//     },delay);
// }

// changecolor("red",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("silver",1000),()=>{
//             changecolor("yellow",1000);
//         }
// ;    })
// })


//this is know as call back hell this type of code can be seen in apis
//cll back nestinh=>callback hell


//here the below and above code both are asynchronous code
//it depends on one another
//for example in below code if 1st cond doesnt work then all the other doesnt
// function savedb(data,success,failure){
//     let internetspd=Math.floor(Math.random()*10)+1;
//     if(internetspd>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savedb("Nithish",()=>{
//     console.log("Success:Your data was saved");
//     //here if first data is saved then lets save next data else failure
//     savedb("ABd",()=>{
//         console.log("Success1:Saved");
//         //here if second data is saved then we can enter the third data
//         savedb("Virat",()=>{
//             console.log("Success2:Saved")
//         },()=>{
//             console.log("Failure:failed")
//         })
//     },()=>{
//         console.log("Failure:Failed");
//     })
// },()=>{
//     console.log("Failure:Failed")
// })

// function savedb(data){
//     return new Promise((resolve,reject)=>{

//          let internetspd=Math.floor(Math.random()*10)+1;
//          if(internetspd>4){
//              resolve("Success:The data is saved");  //this is the result argument for then
//          }
//          else{
//              reject("Failed");//this is the error argument for catch
//          };
//     })
// }

//here when it is rejected the promesis shows error in the console inorder to tackle
//promises uses two method know as then and catch

// let request =savedb("Nithish");
// request.then(()=>{ //if it is saved it prints the below code rather resolve
//     console.log("Promise was resolved")
//     console.log(request);
// })
// .catch(()=>{ //here if promise shown error it would print the below line
//     console.log("Promise was rejected");
//     console.log(request);
// });


// savedb("Nithish")
// .then(()=>{ //if it is saved it prints the below code rather resolve
//     console.log("Promise was resolved");

// })
// .catch(()=>{ //here if promise shown error it would print the below line
//     console.log("Promise was rejected");
// });

//here the above code used only one call so if we use more than one


// savedb("Nithish")
// .then(()=>{ //if it is saved it prints the below code rather resolve
//     console.log("Data1 Saved");
//     savedb("abd").then(()=>{
//         console.log("Data2 was saved")
//     })
// })

// .then(()=>{
//    console.log("Data2 was Saved")
// })
// .catch(()=>{ //here if promise shown error it would print the below line
//     console.log("Promise was rejected");
// });

/*here the above code showed the nesting calling function which were done in callback hell this is by useing
rpomise function*/

//THIS IS THE IMPROVED VERSION OF THE ABOVE CODE
//  savedb("Nithish")
//  .then((result)=>{ //if it is saved it prints the below code rather resolve
//      console.log("Data1 Saved");
//      console.log(result);
//      return savedb("ABd");
//  })
//   //here what we have done is we have give the new callback as output of previous then
//   //so if previous was saved and then it calls the newcall back so we  used new then for new call back 
//  .then((result)=>{
//     console.log("Data2 was Saved")
//     console.log(result);
//  })
//  .catch((error)=>{ //here if promise shown error it would print the below line
//      console.log("Promise was rejected");
//      console.log(error);
//  });


 /*here result is resolve("Success:The data is saved");  //this is the result argument for then
 reject("Failed");//this is the error argument for catch 
 for result it prints success and for error it prints failed*/





 // let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         nextcolor();
//     },delay);
// }

// changecolor("red",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("silver",1000),()=>{
//             changecolor("yellow",1000);
//         }
// ;    })
// })

//LEt convert the call back hell code to promise code

let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color was changed")
        },delay);
    });
}

changecolor("red",1000,)
.then(()=>{
    console.log("color was changed to red");
    return changecolor("orange",1000);
})
.then(()=>{
    console.log("color was changed to red");
    return changecolor("silver",2000);
})
.then(()=>{
    console.log("color was changed to red");
    return changecolor("black",3000);
})
.then(()=>{
    console.log("color was changed to red");
    return changecolor("cyan",3000);
})

