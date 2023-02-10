
var password = [] //global variable 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //going to target the button
// Add event listener to generate button // so when button is clicked, the writePassword function is going to be called
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  alert("Please Select the Following criteria you would like to use to Generate Your Password. Click OK for yes and Cancel for no."); // the alert will pop up informing the user of the following questions to build the password with 
  var charLen = prompt("length of password? Needs to be between 8-128 characters long.") // charLen is the length of the password
    if (charLen >= 8 && charLen <= 128) { 
      var upperCase = confirm("Do you want to use uppercase?");
        if (upperCase === true) {
          var uC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S", "T", "U", "V", "W", "X", "Y", "Z"]
          console.log(uC);
        }
      var lowerCase = confirm("Do you want to use lowercase?");
        if (lowerCase === true) {
          var lC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s", "t", "u", "v", "w", "x", "y", "z"]
          console.log(lC);
        }
      var number = confirm("Do you want to use numbers?");
        if (number === true) {
          var num = ["0","1","2","3","4","5","6","7","8","9"]
          console.log(num);
        }
      var symbols = confirm("Do you want to use symbols?");
        if (symbols === true) {
          var sym = ["!","@","#","$","%","&"]
          console.log(sym);
        }
      } else {
      alert("Try Again!"); 
      writePassword();
    };
    // has to start with the most options to least bc order of operations
    if (upperCase === true && lowerCase === true && number === true && symbols === true) {
      passwordOptions = [].concat(uC, lC, num, sym);
      console.log(passwordOptions);
    } // triple options for upperCase
      else if (upperCase === true && lowerCase === true && number === true) {
      passwordOptions = [].concat(uC, lC, num);
      console.log(passwordOptions);
    } else if (upperCase === true && lowerCase === true && symbols === true) {
      passwordOptions = [].concat(uC, lC, sym);
      console.log(passwordOptions);
    } else if (upperCase === true && number === true && symbols === true) {
      passwordOptions = [].concat(uC, num, sym);
      console.log(passwordOptions);
    } // triple options for lowerCase
      else if (lowerCase === true && number === true && symbols === true) {
      passwordOptions = [].concat(uC, lC, num);
      console.log(passwordOptions);
    } // double options for upperCase
      else if (upperCase === true && lowerCase === true) {
      passwordOptions = [].concat(uC,lC);
      console.log(passwordOptions);
    } else if (upperCase === true && number=== true) {
      passwordOptions = [].concat(uC,num);
      console.log(passwordOptions);
    } else if (upperCase === true && symbols=== true) {
      passwordOptions = [].concat(uC,lC);
      console.log(passwordOptions);
    } // double options for lowerCase
      else if (lowerCase === true && number === true) {
      passwordOptions = [].concat(lC,num);
      console.log(passwordOptions);
    }  else if (lowerCase === true && symbols === true) {
      passwordOptions = [].concat(lC, sym);
      console.log(passwordOptions);
    }  // double options for numbers
      else if (number === true && symbols=== true) {
      passwordOptions = [].concat(num,sym);
      console.log(passwordOptions);
    } // single options
      else if (upperCase === true) {
      passwordOptions = [].concat(uC)
      console.log(passwordOptions);
    } else if (lowerCase === true) {
      passwordOptions = [].concat(lC)
      console.log(passwordOptions);
    } else if (number === true) {
      passwordOptions = [].concat(num)
      console.log(passwordOptions);
    } else if (symbols === true) {
      passwordOptions = [].concat(sym)
      console.log(passwordOptions);
    } else {
      return "Must meet atleast one criteria."
    };
    var newPassword = '';

     for (var i = 0; i <= charLen; i++) {
      var pass1 = Math.floor(Math.random() * passwordOptions.length);
      console.log(pass1);
      newPassword += passwordOptions[pass1];
    }
    
    document.getElementById("password").innerHTML = newPassword
 

  };

  //need to loop through new array and one random thing from passwordOptions arrays and add it to a password variable 

  





