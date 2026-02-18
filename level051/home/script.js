// let month = prompt("Enter a number (1 to 12):");

// let monthName;
// switch (month) {
//   case "1":
//     monthName = "January";
//     break;
//   case "2":
//     monthName = "February";
//     break;
//   case "3":
//     monthName = "March";
//     break;
//   case "4":
//     monthName = "April";
//     break;
//   case "5":
//     monthName = "May";
//     break;
//   case "6":
//     monthName = "June";
//     break;
//   case "7":
//     monthName = "July";
//     break;
//   case "8":
//     monthName = "August";
//     break;
//   case "9":
//     monthName = "September";
//     break;
//   case "10":
//     monthName = "October";
//     break;
//   case "11":
//     monthName = "November";
//     break;
//   case "12":
//     monthName = "December";
//     break;
//   default:
//     monthName = "Invalid month number."


// }



// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// let maxNumber = num1 > num2 ? num1 : num2;

// console.log("The maximum number is: " + maxNumber);



// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// let maxNumber = num1 > num2 ? num1 : num2;
// console.log("The maximum number is: " + maxNumber);

// let password = prompt("Enter your password:");

// let passwordMessage = password.length >= 8 ? "The password is long enough." : "The password is too short.";
// console.log(passwordMessage);




let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

let maxNumber;

if (num1 > num2) {
  maxNumber = num1;
} else {
  maxNumber = num2;
}

console.log("The maximum number is: " + maxNumber);


let password = prompt("Enter your password:");

let message;

if (password.length >= 8) {
  message = "The password is long enough.";
} else {
  message = "The password is too short.";
}

console.log(message);

