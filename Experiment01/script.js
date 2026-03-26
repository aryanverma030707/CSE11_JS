document.getElementById('generateInputs').addEventListener('click', function() {
  const numSubjects = parseInt(document.getElementById('numSubjects').value);
  if (isNaN(numSubjects) || numSubjects < 1 || numSubjects > 10) {
    alert('Please enter a valid number of subjects (1-10).');
    return;
  }
  const marksInputs = document.getElementById('marksInputs');
  marksInputs.innerHTML = '';
  for (let i = 1; i <= numSubjects; i++) {
    const label = document.createElement('label');
    label.textContent = `Marks for Subject ${i}:`;
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.max = 100;
    input.id = `subject${i}`;
    marksInputs.appendChild(label);
    marksInputs.appendChild(input);
  }
});

document.getElementById('calculate').addEventListener('click', function() {
  const numSubjects = parseInt(document.getElementById('numSubjects').value);
  if (isNaN(numSubjects) || numSubjects < 1 || numSubjects > 10) {
    alert('Please enter a valid number of subjects first.');
    return;
  }
  let total = 0;
  let valid = true;
  for (let i = 1; i <= numSubjects; i++) {
    const mark = parseFloat(document.getElementById(`subject${i}`).value);
    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert(`Please enter valid marks for Subject ${i} (0-100).`);
      valid = false;
      break;
    }
    total += mark;
  }
  if (!valid) return;
  const average = total / numSubjects;
  let grade;
  if (average >= 90) grade = 'A';
  else if (average >= 80) grade = 'B';
  else if (average >= 70) grade = 'C';
  else if (average >= 60) grade = 'D';
  else if (average >= 50) grade = 'E';
  else grade = 'F';
  const result = average >= 50 ? 'Pass' : 'Fail';
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>Total Marks: ${total}</p>
    <p>Average Marks: ${average.toFixed(2)}</p>
    <p>Grade: ${grade}</p>
    <p>Result: ${result}</p>
  `;
});