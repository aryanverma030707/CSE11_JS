function generateInputs() {
    let num = document.getElementById("numSubjects").value;
    let container = document.getElementById("marksContainer");

    container.innerHTML = "";

    for (let i = 1; i <= num; i++) {
        container.innerHTML += `
            <input type="number"
                   class="mark"
                   placeholder="Enter Marks of Subject ${i}">
            <br>
        `;
    }

    document.getElementById("calculateBtn").style.display = "inline-block";
}

function calculateResult() {

    let marks = document.getElementsByClassName("mark");

    let total = 0;
    let pass = true;

    for (let i = 0; i < marks.length; i++) {
        let mark = Number(marks[i].value);

        total += mark;

        if (mark < 33) {
            pass = false;
        }
    }

    let average = total / marks.length;

    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 50)
        grade = "D";
    else
        grade = "F";

    document.getElementById("result").innerHTML = `
        Total Marks: ${total}<br>
        Average Marks: ${average.toFixed(2)}<br>
        Grade: ${grade}<br>
        Result: ${pass ? "PASS" : "FAIL"}
    `;
}