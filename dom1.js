function changeColor() {
    let elements = document.getElementsByClassName("text");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
}


const result3 = document.getElementsByTagName('p');
result3[2].innerHTML = 'Hello World';//changed the Third Paragraph into Hello World
result3[1].style.color = 'red';
result3[1].style.fontSize = '20px';
result3[1].style.fontFamily = 'Arial';
result3[1].style.fontWeight = 'bold';
result3[1].innerText = 'Myself = Aryan Verma';//changed the Second Paragraph into Myself Aryan Verma

