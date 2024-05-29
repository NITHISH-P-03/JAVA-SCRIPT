
let gameseq=[];
let userseq=[];


let btns=["red","green","yellow","blue"] ;
let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("It is started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randindx=Math.floor(Math.random() * 3);
    let randcolor=btns[randindx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);

}

function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerText=`Game OVer! Your score ${level} Press any key`;
         setTimeout(function(){
             document.querySelector("body").style.color="red";
        },150);
        reset();
    }
}


function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
   
    userseq.push(usercolor);

    checkans(userseq.length-1);
}   

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
} 

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
