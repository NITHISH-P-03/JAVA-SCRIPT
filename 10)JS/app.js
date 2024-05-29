//Methods are used to define functions in objects

//This keyword

let student={
    name:"Nithish",mat:"99",eng:"99",kan:"95",
    avg(){
        //let total=(mat+rng+kan)/3; here method cannot access from object
        //To access values from object this keyword is used
        console.log(this);
        let total=(this.mat+this.eng+this.kan)/3;
        console.log(total);
    }
}
console.log(student.avg());