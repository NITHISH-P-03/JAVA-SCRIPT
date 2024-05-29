let form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();

})
let user=document.querySelector("#user");

user.addEventListener("change",function(){
    console.log('input changes');
    console.log("Final value=",this.value);
})

user.addEventListener("input",function(){
    console.log('input changes');
    console.log("Final value=",this.value);
})
//<!--here when form is submitted it redirects to above Url so to prevent-->
//event.preventDefault



//here when we prit this for any element the this will be the element