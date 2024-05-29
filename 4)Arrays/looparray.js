// let fruits=['mango','pine','apple','kiwi'];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i],i);
// }   

//Nested Loop in Arrays
// let heroes=[['ironman','spiderman','thor'],['batman','superman','flash']];
// for(let i=0;i<heroes.length;i++){
//     console.log(i,heroes[i],heroes.length);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(`j=${j}`,`${heroes[i][j]}`);
//     }
// }

//for of :- is similar to element of collection
// let fruits=['mango','pine','apple','kiwi'];
// for(i of fruits){
//     console.log(i);
// }

// for(char of "Nithish"){
//     console.log(char);
// }

//Nested for of:-
let heroes=[['ironman','spiderman','thor'],['batman','superman','flash']];
for(list of heroes){
    // console.log(list);
    for(list2 of list){
        console.log(list2);
    }
}