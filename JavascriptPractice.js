// This is a comment.
/* Multriple line
comment */

// Ctrl + Shift + J to view Javascript in browser when opening the HTML file
// that is linked to the Javascript file

// Console log allows you to see things in the console log
/* console.log("Hello from Javascript");

// Data types: undefined, null, boolean, string, symbol, number, and object

// Three ways to declare a variable

// First way:
var myName = "Elizabeth";

myName = 9

// Second way:
let ourName = "freeCodeCamp"

// Third way:
const pi = 3.14

var=a;
var=b=2;

a=7;

b=a;

console.log(a);

// Adding the variables
var sum=10+10;
console.log(sum);

// Subtracting the variables
var differences=75-35;
console.log(differences);

// Multriplying the variables
var product=10*5;
console.log(product);

// Dividing the variables
var quotient=45/5;
console.log(quotient);

// Incrementing numbers
var myVar=9;
myVar++;

// Decrementing numbers
var=myVar=16;
myVar--;

// Decimal numbers
var myDecimal=0.05;
console.log(myDecimal);

// Multiply decimals
var product=0.05*1.15;
console.log(product);

// Divide decimals
var quotient=3.45/2.005;
console.log(quotient);

// Finding a remainder
var Remainder;
Remainder=11%3;
console.log(Remainder);

// Compound assignment with augmented addition
var a=3;
a+=12;
// Use this method for subtract, divide, and multiple.

// Declare string variables
var FirstName="Elizabeth";
var LastName="Overman";

var myFirstName="Blair";
var myLastName="Hazien";

// Escaping literal quotes in strings
var myStr="I am a \"double quoted\" string";
console.log(myStr); */

// Escape sequences in Strings
/*
Code output:
\' Single Quote
\" Double quote
\\ Backslash
\n Newline
\r Carriage Return
\t Tab
\b Backspace
\f Form Feed
*/

/* var myStr="FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// Concatenating strings with plus operator
var ourStr="I come first. " + "I come second.";
var myStr="This is the start. " + "This is the end.";
console.log(ourStr);
console.log(myStr);

// Constructing strings with variables
var ourName="FreeCodeCamp";
var ourStr="Hello, our name is " + ourName + ", how are you?";
var myName="Elizabeth";
var myStr="My name is " + myName + " and I am well!";
console.log(ourStr);
console.log(myStr);

// Appending variables to strings
var anAdjective="awesome!";
var ourStr="FreeCodeCamp is ";
ourStr += anAdjective;
var someAdjective;
var myStr="Learning to code is ";
someAdjective="worthwhile";
myStr += someAdjective;
console.log(ourStr);
console.log(myStr);

// Find length of string
var firstNameLength=0;
var firstName="Elizabeth";
firstNameLength=firstName.length;
console.log(firstNameLength);
var lastNameLength=0;
var lastName="Overman";
lastNameLength=lastName.length;
console.log(lastNameLength);

// Bracket notation to find first character in string
var firstLetterOfFirstName="";
var firstName="Elizabeth";
firstLetterOfFirstName=firstName[0];
var firstLetterOfLastName="";
var lastName="Overman";
firstLetterOfLastName=lastName[0];
console.log(firstLetterOfFirstName);
console.log(firstLetterOfLastName);

// String immutability
var myStr="Jello World";
myStr="Hello World";
console.log(myStr);

// Bracket notation to find Nth character in string
var firstName="Elizabeth";
var secondLetterOfFirstName=firstName[1];
var lastName="Overman";
var secondLetterOfLastName=lastName[1];
console.log(secondLetterOfFirstName);
console.log(secondLetterOfLastName);

// Bracket notation to find the last character of the string
var firstName="Elizabeth";
var lastLetterOfFirstName=firstName[firstName.length-1];
var lastName="Overman";
var lastLetterOfLastName=lastName[lastName.length-1];
console.log(lastLetterOfFirstName);
console.log(lastLetterOfLastName);

// Word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdjverb) {
  var result="";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdjverb;
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly")); */

// Store multiple values with arrays
var myArray["Elizabeth", "Overman", 21];

// Nested arrays
var nestedArray[["Panthers", 23], ["Patriots", 0]];

// Access array data with indexes
var dataArray[10, 20, 30, 40, 50, 60];
var myData=dataArray[3];
console.log(myData);
