const heading = document.createElement('h2');
const bodytag = document.getElementsByTagName('body')[0];
heading.textContent = 'This is a heading created using createElement';
bodytag.append(heading);
heading.style.color = 'blue';


function onClick(){
    console.log("Button Clicked");
}

function onMouseOver(){
    console.log("Mouse Over");
}

function onMouseOut(){
    console.log("Mouse Out");
}

function onMouseDown(){
    console.log("Mouse Down");
}

function onMouseUp(){
    console.log("Mouse Up");
}

function onMouseMove(){ 
    console.log("Mouse Move");
}

function onMouseEnter(){
    console.log("Mouse Enter");
}

function onMouseLeave(){
    console.log("Mouse Leave");
}

function onFocus(){     
    console.log("Input Focused");   
}

function onBlur(){     
    console.log("Input Blurred");   
}

function onChange(){     
    console.log("Input Changed");   
}

function onSubmit(){     
    console.log("Form Submitted");   
}

function onhandlefocus(){
    console.log("Input Focused");
}

function onhandleblur(){
    console.log("Input Blurred");
}

function onhandlechange(){
    console.log("Input Changed");
}      

x=document.querySelector("button");
x.addEventListener('focus', onhandlefocus);
x.addEventListener('blur', onhandleblur);
x.addEventListener('change', onhandlechange);

function myBody(){
    alert("Welcome to my website");
}