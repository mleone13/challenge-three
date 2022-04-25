// Assignment code here

var passwordLength;

var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialCharacterList = "!@#$%^&*+,-.:;<=>?{}[]/^_`~|";

var passwordList = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var response = getPrompts();
  var passArray = response.passwordList.split("");
  var passwordStr = "";
  for (var i = 0; i < response.passwordLength; i++) {
    var index = Math.floor(Math.random() * passArray.length);
    var digit = passArray[index];
    passwordStr += digit;
  }
  return passwordStr;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function generatePassword() {}

function getPrompts() {
  passwordLength = parseInt(
    window.prompt(
      "How many characters would you like your password to contain? Please choose between 8-128 characters."
    )
  );

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Error: Please choose number within correct range");
    return;
  }

  if (window.confirm("Click OK to include lowercase letters.")) {
    passwordList = passwordList.concat(lowerCaseList);
  }

  if (window.confirm("Click OK to include uppercase letters.")) {
    passwordList = passwordList.concat(upperCaseList);
  }

  if (window.confirm("Click OK to include numbers.")) {
    passwordList = passwordList.concat(numberList);
  }

  if (window.confirm("Click OK to include special characters.")) {
    passwordList = passwordList.concat(specialCharacterList);
  }

  var returnObj = {
    passwordList: passwordList,
    passwordLength: passwordLength,
  };
  return returnObj;
}
