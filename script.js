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



  return ("serul;okopl[")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
