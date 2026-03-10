var myinfo = ["sachin", "mumbai", 34, "cricket"]
var myinfo1 = ["mahi", "mumbai", 34, "cricket"]
console.log(myinfo, myinfo1);

let collection = {
    name: "sachin",
    city: "mumbai",
    age: 34,
    profession: "cricket",
    display: function(){
        console.log("hello world");
    }
}

console.log(collection);
collection.display();  
collection.teachername = "sachin";
collection.phonenumber = 1234567890;


// object literal
trainerinfo = {
    name: "Vijay",
    city: "Pune",
    age: 30,
    profession: "Trainer"
}
trainerinfo.contact= 1234567890;
console.log(trainerinfo);