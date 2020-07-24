console.log("Hello World!");

var myVariable = 100;
var currentTaxRate= .085;

console.log(myVariable);

//cannot multiply strings

var mySentence = "hundred";

var total = 10*mySentence;

//total will hold a Nan value(which stands for Not a Number)
 var numberTotal = 10*100;

console.log(numberTotal);

//true and false

var biggerNumber = numberTotal + 1000;

console.log(biggerNumber);

var userPurchaseTotal= 3000;

var purchaseTax = userPurchaseTotal * currentTaxRate;

var PurchaseTotal= userPurchaseTotal + purchaseTax;

//The plus symbol is not doing addition, instead it is concatenating, or combining two strings. Note that Javascript will convert the number in purchaseTax to a string, to concatenate.

var sentenceToWrite= "The user's purchase tax is " +purchaseTax;

var sentenceToWritePurchase = "The user purchased $" +userPurchaseTotal+ " worth of stuff!";

var sentenceForTotal="The user has to pay a total of $" +PurchaseTotal;

console.log(sentenceToWritePurchase);
console.log(sentenceToWrite);
console.log(sentenceForTotal);