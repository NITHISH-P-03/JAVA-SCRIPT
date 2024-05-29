let hi=function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("YOu gave argument as:",args[i]);
    }
}
console.log(hi(1,2,4));

let bye=function sum1(...args){
    return args.reduce((re,ele)=>re+ele);
}
console.log(bye(2,3,4));



