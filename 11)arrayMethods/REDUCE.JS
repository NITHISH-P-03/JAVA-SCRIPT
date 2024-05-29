//Reduce the array to a single value
let arr=[1,2,3,4];
//let final=arr.reduce((rel,ele)=>rel+ele);
let final=arr.reduce((rel,ele)=>{
    console.log(rel);
    return rel+ele;
});
console.log(final);


//normal array method
let ar=[12,3,1,46,21,45,100,1];
let max=-1;
for(let i=0;i<=ar.length;i++){
    if(ar[i]>max){
        max=ar[i];
    }
}
console.log(max);



/*find maximun in an array using reduce
let ar=[12,3,1,46,21,45,100,1];
let max=ar.reduce((max,ele)=>{
    if(max>ele){
        return max;
    }
    else {
        return ele;
    }
});
console.log(max)*/