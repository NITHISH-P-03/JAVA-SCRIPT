let max=prompt("Enter the max number!.");
let random=Math.floor(Math.random()*max+1);
let guess=prompt("Enter the guessing number!");
while(true){
    if(guess=="quit"){
        console.log("YOU are quitting ");
        break;
    }

    if(guess==random){
        console.log("Your guess is correct,congrats",random);
        break;
    }
    else if(guess>random){
        prompt("Your guess is wrong and You have enter largenum.");
    }
    else{
        prompt("Your guess is wrong you have enter smallnum!.")
    }
}