//build an array that stores first & last names. The default value of the array will be empty.
var firstName = [];
var lastName = [];
//Ask user for a first name, and store it in the first names array.
var question = prompt("Enter First Name");
firstName.push(question);
//Ask user for a last name, and store it in the Last names array.
var userAnswer = prompt("Enter Last Name");
lastName.push(userAnswer);
//display to the window both first and Last name from the array with the Length of the both arrays.
window.alert(firstName[0] + " " + lastName[0] + " " + firstName.length + lastName.length);