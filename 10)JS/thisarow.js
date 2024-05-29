//this is an object that is executes the piece of code
//Arrow uses lexical Scope(it take the thing from parent)
//function uses the object
student={
    name:"Nithish",
    age:"14",
    class:"ECE",
    pop:this,//global Scope

    getName:function(){ 
        console.log(this);
        return this.name; //global scope here we are getting the optup name because it call from the object student 
        //not from window
        //FOr function this is from calling object here which is student

        //output:'Nithish'
        //here this accessed from object studeent so this for function is calling object
    },

    getage: ()=>{
        //for arrow function this is from parent oject here the parentobject is window
        console.log(this);
        return this.age;  //parent's scope=>window

        //output for above arrow function
        //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        //herer the this is accessed from parent window so it returns window


        //here the above arrow func method is wrong it creates confusion but in somecases it is useful
    },

    //inclarity another case

    getinfo1:function(){
        setTimeout (()=>{
            console.log(this)
        },2000);
    },
    //here when we run this in console output will be 
    //thisarow.js:37 {name: 'Nithish', age: '14', class: 'ECE', pop: Window, getName: ƒ, …}
    //here it is printtting srudent because
    /*1)here set timeout parent is getinfo because of arrow function getinfo calls from student so it prints student*/

    getinfo1:function(){
        setTimeout (function(){
            console.log(this)
        },2000);
    },

    //output for above 
        //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    //this is because the settimeout function take call from window object so here this is window

}


//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//here window is the global scope where student all the other object lie on window even this also lie on window
