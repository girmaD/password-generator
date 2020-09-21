
// declare a function called generatePassword - that returns a string value, newPassword
function generatePassword(){
    // making sure that at the text content of the text area is empty before generating a password.
    document.getElementById("password").value = "";
    // declare an empty string variable
    var newPassword = "";  
    // prompt users password length, change it to integer and assign a variable to hold it
    var numberOfChars = parseInt(prompt("How many characters would you like your new password to have? It must be between 8 & 128 characters"));
  
    // while the critria is not met, ask users again and again - until a valid number is entered.
    // numbersOfChars has to be (a number) and (between 8 & 128 characters) - to be valid.
            
    while(numberOfChars < 8 || numberOfChars > 128 || isNaN(numberOfChars)){   
        alert("Please enter a valid number between 8 & 128");     
        numberOfChars = parseInt(prompt("How many characters would you like your new password to have? It must be between 8 & 128 characters"));
    }    
    //Ask users to confirm whether they want to include uppercase letters and store it in a variable
    var upperLetters = confirm("Would you like to include uppercase letters?");
    //Ask users to confirm whether they want to include lowercase letters and store it in a variable
    var lowerLetters = confirm("Would you like to include lowercase letters?");
    //Ask users to confirm whether they want to include special characters and store it in a variable
    var specialChars = confirm("Would you like to include special characters?");
    //Ask users to confirm whether they want to include numbers and store it in a variable
    var numericLetters = confirm("Would you like to include numbers?");
    
    // as long as users doesn't include at least one character type, alert and ask them again
    while(!upperLetters && !lowerLetters && !specialChars && !numericLetters){
        alert("Please select at least one character type");
        upperLetters = confirm("Would you like to include uppercase letters?");
        lowerLetters = confirm("Would you like to include lowercase letters?");
        specialChars = confirm("Would you like to include special characters?");
        numericLetters = confirm("Would you like to include numbers?");
    }

    //declate a string variable containing all uppper case letters  
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //declate a string variable containing all lower case letters 
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    //declate a string variable containing all special characters 
    var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    //declate a string variable containing all numbers
    var numbers = "0123456789";

    //use for loop (numberOfChar) times   
    for(var i = 0; i < numberOfChars; i++){    
    //if the user wishes to include uppercase letters, choose a random uppercase letter from upperCaseLetters string and concatnate with newPassword
      if(upperLetters){
          newPassword += getRandom(upperCaseLetters);  
      }      
    //if the user wishes to include lowercase letters, choose a random lowercase letter from lowerCaseLetters string and concatnate with newPassword  
      if(lowerLetters){
        newPassword += getRandom(lowerCaseLetters);
        
      }      
     //if the user wishes to include special characters, choose a random special character from specialCharacters string and concatnate with newPassword  
      if(specialChars){
        newPassword += getRandom(specialCharacters);        
      }
     //if the user wishes to include numbers , choose a random number from numbers string variable and concatnate with newPassword   
      if(numericLetters){
          newPassword += getRandom(numbers);
      }
    // limit the number of characters to (numberOfChars) as the uses wishes his password length to be   
      newPassword = newPassword.substring(0, numberOfChars);
    }
    //finally the function returnsnewPassword 
    return newPassword;
}
// declare a function called getRandom that returns a randomIndex for a string variable  
  function getRandom(items){
  // choose a random number between zero and the length of the string argument and chop of the decimals   
    var randomIndex = Math.floor(Math.random() * items.length);
  // Assign the chosen randomNumber to be an index of the string argument
    var randomChar = items[randomIndex];
  // return randomChar chosen as a result of the randomIndex
    return randomChar;
  }

    
  ///////////////////////////////////////////////////////////////////////  
  
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  //////////////////////////////////////////////////////////////////////
  