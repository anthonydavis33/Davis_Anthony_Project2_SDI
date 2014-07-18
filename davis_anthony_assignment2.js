/* Anthony Davis
* 07/17/2014
* Project 2
* Dragon Overall Training
*/

// Initial Variables
var     yourName = "John",
        specialTitle = "Master Dragon Trainer",
        dragonsTrained = 0,
        hasTrained = 0
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
    return hasTrained = true;
};

// Number Function
var dragonFunction = function (yourName) {
    for (i = 1; i < 15; i++) {
        console.log("You have trained " + i + " Dragons.");
    };
    console.log(yourName + " has trained " + i + " Dragons!");
    return dragonsTrained = i;
};

// String Function
var newNameFunction = function (yourName, specialTitle) {
    var newName = (yourName + " " + specialTitle);
    return newName;
};

// It begins!
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
hasTrained = trainingFunction(hasTrained, yourName);

// Number Function call
dragonsTrained = dragonFunction(yourName);

// String Function call
yourName = newNameFunction(yourName, specialTitle);


// Output
console.log("I announce to you, Johnsville. Sir " + yourName + " of Johnsville.");
console.log("Training " + dragonsTrained + " dragons in his career and hopefully infinite more.");