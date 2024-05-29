//program for finding min number in an array (normal method)
// let a=[24,3,21,25];
// let max=0;
// for(let i=0;i<=Array.length;i++){
//     if(a[i]>max){
//         max=a[i];
//         min=max;
//     }
//     else if(a[i]<max && a[i]<min){
//         min=a[i];
//     }
// }
// console.log(max);
// console.log(min);

//for function

//by usinf reduce
let lol =function (nums){
   let min=nums.reduce((min,ele)=>{
    if(min<ele){
        return min;
    }
    else{
        return ele;
    }
   });
   return min;
}
console.log(lol([1,-1,3,5]));