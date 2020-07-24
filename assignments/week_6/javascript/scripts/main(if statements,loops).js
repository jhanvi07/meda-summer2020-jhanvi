//Math Operators;
//+,-,*,/,%
//String Operator
// +(concatenation)

/*
Everything in here is a comment.
*/ 

//Conditional Operators
//All conditional operations tend to end up being a boolean.

/*
==
<
>
!=(Not equal to)

DEPENDENT OF DATA TYPES
=== both are equal AND are the same data type(use to ignore data types)
!===
*/

var data1 = 10;
var data2 = "10";

//Type Coercion

if(data1===data2){
    console.log("The condition was true.");
}

//ternary operator
//condition ? true code : false code;

var isItTrue = false ? "hello" : "goodbye";

var isItTrue2;
if(false){
    isItTrue2="hello";
}
else{
    isItTrue2="goodbye";
}

console.log(isItTrue)

// Functions
function sayHelloThreeTimes() {
    console.log("hello!");
    console.log("hello!");
    console.log("hello!");
}

function sayGoodByeTwoTimes() {
    console.log("goodbye!");
    console.log("goodbye!");
}

function sayHelloNineTimes() {
    sayHelloThreeTimes();
    sayHelloThreeTimes();
    sayHelloThreeTimes();
}

sayHelloThreeTimes();
console.log("How are you doing");


// function recursiveFunction() {
//     recursiveFunction();
// }

sayHelloThreeTimes();
sayHelloThreeTimes();
sayGoodByeTwoTimes();

sayHelloNineTimes();

// Functions END

//Loops START
console.log("Loops section");

//for(iterator; condition; increment){ code block }

for(var i=0; i< 100; i=i+1){

    var text= "Loop number" +(i+1);
    console.log(text);
}

for(var counter =1; counter < 10; counter = counter+1){
    
}