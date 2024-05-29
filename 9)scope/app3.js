//Methods that are the action performed on object
let calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
}

console.log(calculator.add(1,3));
//here the above code the function in decalred inside the object as key and value
//the above code can be even written as
/*
let calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}*/
