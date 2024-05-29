//create p with text hey i am red with color 
let para1=document.createElement('p');
para1.innerText="Hey I am Red";
document.querySelector('body').append(para1);
para1.classList.add('red');

let h3=document.createElement('h3');
h3.innerText="Hey I am blue";
document.querySelector('body').append(h3);
h3.classList.add('blue');



let div=document.createElement('div');
let h1=document.createElement('h1');
let p=document.createElement('p');
div.classList.add('lol');

h1.innerText="I am h1";
p.innerText="I am p";

div.append(h1);
div.append(p);
document.querySelector('body').append(div);