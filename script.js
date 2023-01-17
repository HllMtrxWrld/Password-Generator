// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



document.getElementById("generate").onclick = function() { //connect prompt to the button
// promp user 
  let passwordLength = prompt("Please, choose your password length(10-64 characters)");
  let passwordLength1 = Number(passwordLength);
  //console.log(typeof passwordLength1);
  //console.log(passwordLength1);               //some testing

  while (passwordLength < 10 || passwordLength > 64) {   //this code make user to choose correct password length
    alert("Incorrect password length. Please, choose the correct password length beetwen 10 and 64");
    let passwordLength = prompt("Please, choose your password length(10-64 characters)");
  };

  let userInputLowercase = confirm("Do you want lowercases in your password?");

  let userInputUppercase = confirm("Do you want uppercases in your password?");

  let userInputNumeric = confirm("Do you want numbers in your password?");

  let userInputSpecial = confirm("Do you want special characters in your password?");

  let allCharacters = []; //array for collecting all characters for password
  if (userInputLowercase == true) {
    allCharacters = allCharacters.concat(lowerCasedCharacters)
    };
  if (userInputUppercase == true) {
    allCharacters = allCharacters.concat(upperCasedCharacters)
  };
  if (userInputNumeric == true) {
    allCharacters = allCharacters.concat(numericCharacters)
  };
  if (userInputSpecial == true) {
    allCharacters = allCharacters.concat(specialCharacters)
  };
  allCharacters.sort(compareRandome);
  //console.log(allCharacters);   //test

  // function for mix all characters in the array
  function compareRandome(a, b) {
  return Math.random() - 0.5;
  }

  let passwordOut = "";  // creating the variable to containe our password

  for (let i = 0; i < passwordLength1; i++) {
  passwordOut = passwordOut + allCharacters[i];
  
} 

  var passwordText = document.querySelector('#password'); //the varriable to out our password in password area

  passwordText.value = passwordOut;
  
  return passwordOut;
}


