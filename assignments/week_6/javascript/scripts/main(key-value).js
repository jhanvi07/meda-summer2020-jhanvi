//key-value pair
//Name of a person: Jhanvi Lotwala

//creating an array
var myArr = ["Jhanvi","Lotwala",23 ,"pizza"];

var myObj= {
    "firstName": "Jhanvi",
    "lastName": "Lotwala",
    "age": 23,
    "fav food": "pizza",
    "color": function(){
        console.log("My fav color is red");
    }
};

console.log(myObj["firstName"]+ "'s age is " + myObj["age"]);

myObj["age"] = myObj["age"] + 1;
console.log(myObj.age);

myObj.color();