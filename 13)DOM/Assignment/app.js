/*Qs1.CreateanewinputandbuttonelementonthepageusingJavaScriptonly.Setthetextofbuttonto“Clickme”*/
let btn=document.createElement('button');
btn.innerText="Click Me";
document.querySelector('body').append(btn);

/*Addfollowingattributestotheelement:
-Changeplaceholdervalueofinputto“username”-Changetheidofbuttonto“btn*/
btn.setAttribute('id','btn');
btn.setAttribute('placeholder','username');

let bt=document.querySelector('#btn');
bt.classList.add('btns');

let h1=document.createElement('h1');
h1.innerHTML="<u>DomPractice</u>"
document.querySelector('body').append(h1);
 h1.classList.add('h1');