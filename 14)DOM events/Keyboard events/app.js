// let btn=document.querySelector('button');
// btn.addEventListener("click",function(event){
//     console.log(event);
//     //here event is the action which is done example here we given click
//     //so it is done by mouse pointer it prints pointer
// })

// let inp=document.querySelector('input');
// inp.addEventListener('keydown',function(event){
//     console.log('Key was pressed')//whenever the key is pressed it prints 
//     console.log("KEY=",event.key);//it i print the object of the letter which is pressed on the key board
//     console.log('CODE=',event.code);
// })

//Game arrow movements
let inp=document.querySelector('input');
inp.addEventListener('keydown',function(event){
    if(event.code=="ArrowUp"){
        console.log("Character moves forward");
    }
    else if(event.code=="ArrowLeft"){
        console.log("Character moves left");
    }
    else if(event.code=="ArrowDown"){
        console.log("Character moves backward");
    }
    else if(event.code=="ArrowRight"){
        console.log("Character moves Right");
    }
})