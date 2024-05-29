// let smallimages=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallimages.length;i++){
//     console.dir(smallimages[i]);
//     //let change and source of the file to spiderman
//     smallimages[i].src="assets/spiderman_img.png";
//     console.log(`the images sec changes in ${i}`);
// }

//THese things runs in console
//Query selector
//query selector selects only the first element
//console.dir(document.querySelector('h1')); //element
//console.dir(document.querySelector('#description')); //id
//console.dir(document.querySelector('.oldImg')); //class 
//nested query
//console.dir(document.querySelector('div a')); //isnide div i need anchor tag
//for selecting all anchor taga 
//similar for all elements
//console.dir(document.querySelectorAll("div a"));



//let us change the anchor tag color in box class
let link=document.querySelectorAll('.box a');
// for(let i=0;i<link.length;i++){
//     link[i].style.color="cyan";
// }
//here the style is set in inline so it is ot frequently used
for(links of link){
    links.style.color="cyan"; 
}

/*to add class 
let img = document.querySelector('img');
img.classList.add('lol'); 
img.classList.remove('lol'); 
img.classList.contains('lol'); 
img.classList.toggle('lol');*/ 