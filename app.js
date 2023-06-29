// ----------------------------------------TASK 1----------------------------------------
console.log(getGreater());
function getGreater() {
  let num1 = parseInt(prompt("Input you Number #1!", ""));
  let num2 = parseInt(prompt("Input you Number #1!", ""));

  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    alert("The numbers are equal!");
  }
}

// ----------------------------------------TASK 2----------------------------------------
function calcAge(year) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - year;
  return age;
}
function yearsUntilRetirement(year, userName) {
  let age = calcAge(year);
  let retirementAge = 60;

  console.log(userName + " is " + age + " y/o.");

  if (retirementAge <= age) {
    console.log(userName + " is already retired.");
  } else {
    let yearsUntil = retirementAge - age;
    console.log(userName + " will retire in " + yearsUntil + " years.");
  }
}
let userName = prompt("What is you name?", "");
let birthYear = parseInt(prompt("What is your birth year?", ""));

yearsUntilRetirement(birthYear, userName);