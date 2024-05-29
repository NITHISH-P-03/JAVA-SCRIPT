//Higherorder funtions
//here higherorder function uses another func as argument inside an function
function multiplegreet(func,n){
    for(let i=0;i<=n;i++){
        func();  //Func is just avariable which call the function greet
    }
}

    let greet =function(){
        console.log("Namskara");
    } 
multiplegreet(greet,10);
//multiplegreet(function(){ console.log("Namskara")},100 );



//higher order function with arguments
function evernorodd(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(n%2!=0);
        }
        return odd;
    }
    else if(request=="even"){
        let even = function(){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("You are Wrong");
    }
}
 
let func=evernorodd("odd");
func(5);
