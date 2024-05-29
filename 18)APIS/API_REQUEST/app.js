let url="https://catfact.ninja/fact";

//fetch keyword is used to request apis
//so here when we print this it returns Promise so we can use then and catch
// fetch(url)
// .then((res)=>{
//     //console.log(res);
//     //here it only prints the promise inorder to print the entire thing
//     //console.log(res.json()); here it gives entire promise but we want only particular data
//     res.json().then((data)=>{
//         console.log(data);
//     })
// })
// .catch((err)=>{
//     console.log("ERROR=",err)
// })


//another method

// fetch(url)
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("data:-",data.fact);//it gives only the fact
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data1)=>{
//     console.log("Data1:-",data1.fact);
// })
// .catch((err)=>{
//     console.log("Error",err)
// })



//BY using async
async function getfacts(){
   try{ 
    let res=await fetch(url);
    let data =await res.json();
    console.log(data.fact);

    let res1=await fetch(url);
    let data1 =await res1.json();
    console.log(data1.fact);
   }

   catch(err){
    console.log("Error:-",err)
   }
   console.log("bye!.")
}

getfacts();
