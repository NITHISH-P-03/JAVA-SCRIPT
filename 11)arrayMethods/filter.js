let arr=[1,2,3,4,5,6,7,8,9,,10,12,13,14];
let ans=arr.filter((el)=>{
    return el%2==0;
});
console.log(ans);