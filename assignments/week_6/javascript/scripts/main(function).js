//Functions

var mySpecialNumber = 8;

// ANY INFORMATION THAT ENTERS JAVASCRIPT FROM HTML OR CSS WILL BE THE DATATYPE OF STRING, REGARDLESS OF CONTENT.

function myFunction(){
    var response = prompt("How are you today?");

    if(response===""){
        alert("you did not type anything in!");
        return false;
    }
    else{
        console.log(response);
        return true;
    }

    //var valueFromThisFunction = myFunction();

    //console.log("They said: " +response+ "and the special number is "+mySpecialNumber);
}

//console.log(valueFromThisFunction);
var didTheyRead= myFunction();

if(didTheyRead){
    console.log("They read the message!");
}

