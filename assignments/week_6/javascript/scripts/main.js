function caTax(priceTotal){
    var tax = priceTotal + .085;
    var totalExpense = priceTotal + tax;

    return totalExpense;
}

function writeSentence(priceTotal){
    console.log("The total for a $" +priceTotal+ "purchase is $" +caTax(priceTotal));
}

writeSentence(1000);
writeSentence(13);