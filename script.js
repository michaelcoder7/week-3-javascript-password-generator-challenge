// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  
  const specialCharacters = "!£$%^&*()-+={}[]`:;@'~#|\<>?,./";
  const numbers = "0123456789";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"


  //Initialize Variables 
  var passwordLength = 0;
  var passwordLowerCase = false;
  var passwordUpperCase = false;
  var passwordNumeric = false;
  var passwordSpecial = false

  //Prompt and the required password length setup
  passwordLength = window.prompt ("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("password must be between 8 and 128 characters");
      return;
  }
  
  // prompt of choice of character types setup 
  passwordLowerCase = window.confirm("Click OK to confirm including lowercase characters")
  passwordUpperCase = window.confirm("Click OK to confirm including uppercase characters")
  passwordNumeric = window.confirm("Click OK to confirm including numeric characters")
  passwordSpecial = window.confirm("Click OK to confirm including special characters")

  // To make sure atleast one character type is selected
  if (passwordLowerCase === false && passwordUpperCase === false && passwordNumeric === false && passwordSpecial === false) {
      window.alert("You must select atleast one character type");
      return;
  }
   
  // Password variable set as a string
  var password = "";

  // Master array setup
  const availableCharacters = []
  
  // Conditional statements for choice of characters

  if (passwordLowerCase) {
    availableCharacters.push(lowerCase.split(""));
  }

  if (passwordUpperCase) {
    availableCharacters.push(upperCase.split(""));
  }

  if (passwordNumeric) {
    availableCharacters.push(numbers.split(""));
  }

  if (passwordSpecial) {
    availableCharacters.push(specialCharacters.split(""));
  }

  // Loop setup for password generation based on user's choice of characters

  for (var i = 0 ; i < passwordLength; i++) {
    var randomCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    password += randomCharacter [Math.floor(Math.random() * randomCharacter.length)];

  }

  return (password)
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
