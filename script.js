// Global variables

//declare an array variable containing all uppper case letters  
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//declare an array variable containing all lower case letters 
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//declare an array variable containing all special characters 
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
//declare an array variable containing all numbers
var numbers = ["0","1","3","4","5","6","7","8","9"];

// declate a function to accept a valid password length from a user
function getPasswordLength(){
  // prompt users password length, change it to integer and assign a variable to hold it
  var numberOfChars = parseInt(prompt("How many characters would you like your new password to have? It must be between 8 & 128 characters"));
  
  // while the critria is not met, ask users again and again - until a valid number is entered.
  // numbersOfChars has to be (a number) and (between 8 & 128 characters) - to be valid.
  while(numberOfChars < 8 || numberOfChars > 128 || isNaN(numberOfChars)){   
      alert("Please enter a valid number between 8 & 128");     
      numberOfChars = parseInt(prompt("How many characters would you like your new password to have? It must be between 8 & 128 characters"));
    } 
  return numberOfChars;
}

// declare a function called getRandom that returns a randomIndex  
function getRandom(items){
  // choose a random number between zero and the length of the string argument and chop of the decimals   
    var randomIndex = Math.floor(Math.random() * items.length);
  // Assign the chosen randomNumber to be an index of the string argument
    var randomChar = items[randomIndex];
  // return randomChar chosen as a result of the randomIndex
    return randomChar;
}

// declare a function called generatePassword - that returns a string value, newPassword
function generatePassword(){
    // bring getPasswordLength functon here and declate it as a variable
    var numberOfChars = getPasswordLength();
    // declare an empty string variable
    var newPassword = ""; 
  
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
    // declare an empty array
    var avalChars = [];  

    //if the user wishes to include uppercase letters,  
    if(upperLetters){
    // choose a random uppercase letter from upperCaseLetters arrand and concatnate it to newPassword var.
        newPassword += getRandom(upperCaseLetters);
    // and concatnate upperCaseLetters array with availChars array
        avalChars = avalChars.concat(upperCaseLetters); 
    }      
  //if the user wishes to include lowercase letters,  
    if(lowerLetters){
    // choose a random lowercase letter from lowerCaseLetters string and concatnate with newPassword  
      newPassword += getRandom(lowerCaseLetters);   
    // and concatnate lowerCaseLetters array with availChars array
      avalChars = avalChars.concat(lowerCaseLetters);     
    }      
  //if the user wishes to include special characters,   
    if(specialChars){
    //choose a random special character from specialCharacters string and concatnate with newPassword 
      newPassword += getRandom(specialCharacters);   
    // and concatnate specialCharacters array with availChars array  
      avalChars = avalChars.concat(specialCharacters);     
    }
  //if the user wishes to include numbers ,
    if(numericLetters){
    // choose a random number from numbers string variable and concatnate with newPassword     
        newPassword += getRandom(numbers);
    //  and concatnate numbers array with availChars array     
        avalChars = avalChars.concat(numbers);
    }
       
  //use for loop to add random chars from where we stoped on the if statements (newPassword.length) until the password length is equal to number of chars  
    for(var i = newPassword.length; i < numberOfChars; i++){         
    // limit the number of characters to (numberOfChars) as the uses wishes his password length to be   
      newPassword += getRandom(avalChars)     
    }
    // after the password is formed, availchars array has to be empty to make it ready for next round of password criteria.
    avalChars.value = [];
    //finally the function returns newPassword 
    return newPassword;
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
  