/* Anthony Davis
* 07/17/2014
* Project 2
* Dragon Owner Training
*/

// Initial Variables
var     yourName,
        dragonsTrained,
        hasTrained
;

// Boolean function
var trainingFunction = function (hasTrained, yourName) {
    var trainingNeeded;
    var i = 1;
    if (yourName === "John") {
        trainingNeeded = 3;
    }   else {
        trainingNeeded = 11;
    };
    while (i < trainingNeeded) {
        console.log("You have taken " + i + " course(s).");
        i ++;
    };
    console.log(yourName + " Has completed dragon training!");
    hasTrained = 1;
    return hasTrained;
};
alert ("Hail! I am John Johnson.");
// Prompt - String
yourName = prompt("What be your name traveler?", 'Enter your name here. IE "John"');

// Procedure
if (yourName === "John") {
    console.log("Welcome John! Theres a free house over there if you like.");
}   else {
    console.log(yourName + " is a terrible name. The Inn is cheap and warm.");
};

// Confirm
hasTrained = confirm("Have you ever taken dragon training before?");
alert ("Well let's take you through our training!");

// Boolean Function call
trainingFunction(hasTrained, yourName);
// Number Function call

// String Function call

// Output