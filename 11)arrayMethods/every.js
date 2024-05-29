//every option is similar to and operation it shows true if condition
//satifies for every element in arrat else fals
let arr=[2,4,6,8];
let lol=arr.every((ele)=>{
    return ele%2==0;
});
console.log(lol);

//check whether in array all are multiples of 10
let arr1=[1,10,20,30];
let mul=arr1.every((ele)=>{
    ele%10==0;
});
console.log(mul);