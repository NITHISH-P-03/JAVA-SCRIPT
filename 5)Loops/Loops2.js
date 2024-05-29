//Nested loops
for(let i=1;i<=3;i++){
    console.log(`Outer Loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}

//While Loops
console.log("While Loop")
let o=1;
while(o<=5){
    console.log(o);
    o++;
}

//Guessing Fav Movie
let Fav_movie="avatar";
let guess=prompt("Guess MY fav Movie: ");
while((guess!=Fav_movie) || (guess!="quit")){
    guess=prompt("Please Try Again");
}