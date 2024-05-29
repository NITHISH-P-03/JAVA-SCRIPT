let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){

    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="DELETE";
    delbtn.classList.add('delete');
    item.appendChild(delbtn);
    
    inp.value="";

    console.log(inp.value);
});

// let delbtns=document.querySelectorAll(".delete");
// for(delBtn of delbtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// } here this delete works only for already existing list not
//for new add item because it cant inherit the old properties to overcome
//we can add delete to parent

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        //here event.target targets the element where delete is clicked and it show what type is clicked
        //here we are given button becasue if mouse clicks on delete button it targets BUTTON but if it clicks\
        //itemname it targets LIST so we dont want to delete when name is clicked
        //we want to delete only when Delete buttoon clcicked
        let listitems=event.target.parentElement;
        listitems.remove();
    }
})