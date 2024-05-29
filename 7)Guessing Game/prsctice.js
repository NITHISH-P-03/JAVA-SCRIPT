// //JS(Part5)PracticeQuestionsQs1.
// Createaprogramthatgeneratesarandomnumberrepresentingadiceroll.
// [Thenumbershouldbebetween1and6]

let random=Math.floor(Math.random()*6+1);
console.log(random);

// Qs2.Createanobjectrepresentingacar
// thatstoresthefollowingpropertiesforthecar:name,model,color.Printthecar’sname

let car={
    name:"Mercedes AMG Petronas Motosport",model:"w11",driver:"Lewis Hamilton"
}
console.log(car.name);


// Qs3.CreateanobjectPersonwiththeirname,ageandcity.
// Edittheircity’soriginalvaluetochangeitto“NewYork”.
// AddanewpropertycountryandsetittotheUnitedStates

let driver={
    name:"LEwis HAmilton",age:"40",city:"London"
}
driver["age"]=41;
driver.country="United Kingdom";
driver.nationality="British";
console.log(driver);