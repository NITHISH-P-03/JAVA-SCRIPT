let btn=document.querySelector('button');
let h1=document.querySelector('h1');
let h2=document.querySelector('h2');
let changecolor = function(){
    this.style.backgroundColor="cyan";
    console.dir(this);
}
btn.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
h2.addEventListener("click",changecolor);



//here when we prit this for any element the this will be the element