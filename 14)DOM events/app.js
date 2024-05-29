// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function (){
//     //console.log("Button was Clicked");
//     alert("Button was clicked");
// }

//onclick :-Onclick fucntion is used when we click on a button
//onmouseenter:-onmouseenter is used when we just move the pointer on some element


//if we have number of buttons

let btn=document.querySelectorAll("button");
for(btns of btn){
    btns.onmouseenter=function(){
        console.log("YOu moved the mouse pointer.")
    }

    btns.onclick=lol;
    //btn.onclick=lol(); if we add paranthesis here it executes for all buttons else 
    //it directly excutes here without for loop.

}
function lol(){
    alert("LOOK AT THIS DUDE!");

}
