document.getElementById('generateInputs').onclick = function () {
    let n = parseInt(document.getElementById('numSubjects').value);
  
    if (!n || n < 1 || n > 10) {
      alert("Enter subjects between 1 and 10");
      return;
    }
  
    let container = document.getElementById('marksInputs');
    container.innerHTML = '';
  
    for (let i = 1; i <= n; i++) {
      container.innerHTML += `
        <input type="number" id="m${i}" placeholder="Subject ${i} Marks (0-100)">
      `;
    }
  };
  
  document.getElementById('calculate').onclick = function () {
    let n = parseInt(document.getElementById('numSubjects').value);
    let total = 0;
  
    for (let i = 1; i <= n; i++) {
      let val = document.getElementById(`m${i}`).value;
  
      if (val === '' || val < 0 || val > 100) {
        alert(`Invalid marks for Subject ${i}`);
        return;
      }
  
      total += parseFloat(val);
    }
  
    let avg = total / n;
    let grade = '';
    let result = '';
  
    if (avg >= 90) grade = 'A';
    else if (avg >= 75) grade = 'B';
    else if (avg >= 60) grade = 'C';
    else if (avg >= 50) grade = 'D';
    else grade = 'F';
  
    result = avg >= 50 ? 'Pass' : 'Fail';
  
    document.getElementById('result').innerHTML = `
      Total: ${total} <br>
      Average: ${avg.toFixed(2)} <br>
      Grade: ${grade} <br>
      Result: ${result}
    `;
  };