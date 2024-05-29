//Activity on fact api
// let url="https://catfact.ninja/fact";

// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//    let fact=await getfacts();
//    console.log(fact);
//    let p=document.querySelector("#result");
//    p.innerText=fact;
// })



// //BY using async
// async function getfacts(){
//    try{ 
//     let res=await axios.get(url);

//     return res.data.fact;
//    }

//    catch(err){
//     console.log("Error:-",err)
//     return "no error";
//    }
 
// }

// getfacts();


//Activity on dog api
let url2="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
   let image=await getimg();
   let img=document.querySelector("#result");
   img.setAttribute("src",image);
})







 async function getimg(){
      try{ 
       let res=await axios.get(url2);
   
       return res.data.message;
      }
   
      catch(err){
       console.log("Error:-",err)
       return "no error";
      }
    
   }
   
   getfacts();