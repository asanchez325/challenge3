// Assignment code here


// Get references to the #generate element
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "=", "<", ">", "?","~"];

// Declaration of Variables
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericCharacter;
var confirmSpecialCharacter;


// Prompt to confirm character length
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Note: Password length must be between 8-128 characters"));

  // Loop if answer is outside the parameters 
  while(confirmLength <=  7|| confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back character length  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK if you would like to include UPPERCASE CHARACTERS");
    var confirmNumericCharacter = confirm("Click OK if you would like to include Numeric Characters"); 
    var confirmSpecialCharacter = confirm("Click OK if you would like to include Special Characters");   
    }

// Write password to the #password input
function writePassword() {
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}