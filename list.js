const text2= document.querySelector("ul li");
text2.style.color = "green";
text2.style.fontSize = "18px";
//loop to change the color of all list items to green
const listItems = document.querySelectorAll("ul li");
listItems.forEach(item => {
  item.style.color = "blue";
  item.style.fontSize = "18px";
  item.style.fontFamily = "Verdana";
  item.style.fontWeight = "bold";
});
text2.innerText = "I am a Web Developer";
//changed 1st List Item into Item 1=I am a Web Developer 


const element= document.getElementById('myH1');
element.getAttribute('class');
element.setAttribute('class','heading');


function MyFunction() {
    document.getElementById("myH1").setAttribute("class", "heading");
}

function Click(){
    const n=document.getElementById("myH1").value;
    document.getElementById("myH1").innerHTML=n;
}
