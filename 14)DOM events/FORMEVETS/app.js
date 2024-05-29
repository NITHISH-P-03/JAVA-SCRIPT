let form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();
    //alert("Form is Successfully Submitted")//To get the value of the text entered
    // let inp=document.querySelector("input");
    // console.log(inp.value);


    let user=document.querySelector("#user"); //or let user=this.elements[0];
    let pass=document.querySelector("#password");//or let pass=this.elements[1];

    console.log(`The username is ${user.value}`);
    console.log(`The password is ${pass.value}`);

    alert(`YOur uSername is ${user.value} and password ${pass.value}` ); 





})

//<!--here when form is submitted it redirects to above Url so to prevent-->
//event.preventDefault



//here when we prit this for any element the this will be the element