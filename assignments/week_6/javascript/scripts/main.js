var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

var randomArr = ["Hello",45, false];

var newArr = randomArr.concat(days);

console.log(days[3]);
console.log(newArr);

//days[1] = "moanday";
//console.log(days);

function addArr(arr1, arr2){
    var newArr = [
        arr1[0] + arr2[0],
        arr1[1] + arr2[1]
    ]
    return newArr;
}

var firstArr = [1,10];
var secondArr = [9,90];
var sumArr = addArr(firstArr, secondArr);

console.log(sumArr);

