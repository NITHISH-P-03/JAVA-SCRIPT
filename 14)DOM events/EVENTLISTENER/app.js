let btn=document.querySelectorAll("button");
function sayhello(){
    alert('HEllO WELCOME');
}
function saybye(){
    alert("BYE GOODBYE");

}
for(btns of btn){
    // btns.onclick=sayhello;
    // btns.onclick=saybye;
    //here onclick can use only one action at a time so here on sayhello works not saybye
    //so instead of onclick eventlistener is used for multiple actions

    // btns.addEventListener("click",sayhello);
    // btns.addEventListener("click",saybye);
    btns.addEventListener("dblclick",function(){
        console.log("You have doubleCLicked")
    });
}