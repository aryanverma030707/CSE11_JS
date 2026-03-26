let fontSize = 16;
let isVisible = true;
function changeHeading() {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = text;
}
function changeBackground() {
    document.body.style.backgroundColor = 
        "#" + Math.floor(Math.random()*16777215).toString(16);
}
function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}
function toggleParagraph() {
    let para = document.getElementById("para");
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
}
function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#f4f4f4";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputText").value = "";
    fontSize = 16;
    isVisible = true;
}