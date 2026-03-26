let employees = [];

document.getElementById('addEmployee').addEventListener('click', function() {
  const name = document.getElementById('empName').value.trim();
  const id = document.getElementById('empId').value.trim();
  const salary = parseFloat(document.getElementById('empSalary').value);
  const dept = document.getElementById('empDept').value.trim();

  if (!name || !id || isNaN(salary) || salary < 0 || !dept) {
    alert('Please fill all fields with valid data.');
    return;
  }

  const employee = {
    name: name,
    id: id,
    salary: salary,
    department: dept
  };

  employees.push(employee);

  document.getElementById('empName').value = '';
  document.getElementById('empId').value = '';
  document.getElementById('empSalary').value = '';
  document.getElementById('empDept').value = '';

  alert('Employee added successfully!');
});

document.getElementById('displayAll').addEventListener('click', function() {
  if (employees.length === 0) {
    document.getElementById('output').textContent = 'No employees to display.';
    return;
  }
  let output = 'All Employees:\n\n';
  for (const emp of employees) {
    output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Department: ${emp.department}\n`;
  }
  document.getElementById('output').textContent = output;
});

document.getElementById('filterSalary').addEventListener('click', function() {
  const filtered = employees.filter(emp => emp.salary > 50000);
  if (filtered.length === 0) {
    document.getElementById('output').textContent = 'No employees with salary > ₹50,000.';
    return;
  }
  let output = 'Employees with Salary > ₹50,000:\n\n';
  for (const emp of filtered) {
    output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Department: ${emp.department}\n`;
  }
  document.getElementById('output').textContent = output;
});

document.getElementById('totalSalary').addEventListener('click', function() {
  if (employees.length === 0) {
    document.getElementById('output').textContent = 'No employees to calculate total salary.';
    return;
  }
  let total = 0;
  for (const emp of employees) {
    total += emp.salary;
  }
  document.getElementById('output').textContent = `Total Salary Payout: ₹${total}`;
});

document.getElementById('avgSalary').addEventListener('click', function() {
  if (employees.length === 0) {
    document.getElementById('output').textContent = 'No employees to calculate average salary.';
    return;
  }
  let total = 0;
  for (const emp of employees) {
    total += emp.salary;
  }
  const average = total / employees.length;
  document.getElementById('output').textContent = `Average Salary: ₹${average.toFixed(2)}`;
});

document.getElementById('countDept').addEventListener('click', function() {
  const dept = document.getElementById('deptInput').value.trim();
  if (!dept) {
    alert('Please enter a department name.');
    return;
  }
  const count = employees.filter(emp => emp.department.toLowerCase() === dept.toLowerCase()).length;
  document.getElementById('output').textContent = `Number of employees in ${dept}: ${count}`;
});