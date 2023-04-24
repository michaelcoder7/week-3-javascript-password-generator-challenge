// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  
  const specialCharacters = "!£$%^&*()-+={}[]`:;@'~#|\<>?,./";
  const numbers = "0123456789";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"


  //Initialize Variables 
  var passwordLength = 0;
  var passwordLowerCase = false;
  var passwordUpperCase = false;
  var passwordNumeric = false;
  var passwordSpecial = false;


  passwordLength = window.prompt ("How many characters would you like your password to contain?");
  if ( passwordLength < 8 || passwordLength > 128) {
      window.alert("password must be between 8 and 128 characters");
      return;
  }

  passwordLowerCase = windows.confirm("Click OK to confirm including lowercase characters")
  passwordUpperCase = windows.confirm("Click OK to confirm including uppercase characters")
  passwordNumeric = windows.confirm("Click OK to confirm including numeric characters")
  passwordSpecial = windows.confirm("Click OK to confirm including special characters")

  // To make sure one character type is selected
  if (passwordLowerCase === false && passwordUpperCase === false && passwordNumeric === false && passwordSpecial === false) {
      window.alert("You must select atleast one character type");
      return;
  }

  var MainPassword = "";

  return ("serul;okopl[")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
