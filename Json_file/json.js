var text = '{ "employees": [' +
'{ "firstName":"John","lastName":"Doe" },' +
'{ "firstName":"Jane","lastName":"Smith" },' +
'{ "firstName":"Alice","lastName":"Johnson" }' +
'] }';

var obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
obj.employees[0].firstName + " " + obj.employees[0].lastName;

document.getElementById("demo").innerHTML += "<br>" +
obj.employees[1].firstName + " " + obj.employees[1].lastName;

document.getElementById("demo").innerHTML += "<br>" +
obj.employees[2].firstName + " " + obj.employees[2].lastName;

let promises = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve("Data loaded successfully!");
    }
    else {
        reject("Failed to load data.");
    }
});

promises.then((result => {
    console.log(result);
})).catch((error) => {
    console.error(error);
});

async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log("Data fetched successfully:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the function

// Alternative: Using .then() and .catch()
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(data => console.log("Data fetched:", data))
// .catch(error => console.error("Fetch error:", error));

try {
    let data = getData();
    console.log("Data returned from getData():", data);
} catch (error) {
    console.error("Error in getData():", error);
}   

localStorage.setItem("name", "sachin");
var name1 = localStorage.getItem("name");
console.log(name1);

//Remove Data 
localStorage.removeItem("name");
var name2 = localStorage.getItem("name");
console.log(name2); // This will log null since the item has been removed

// Clear all data from localStorage
localStorage.clear();
var name3 = localStorage.getItem("name");
console.log(name3); // This will also log null since all items have been cleared
