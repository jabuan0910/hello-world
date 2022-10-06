// ask the user a question, assign response to a variable called 'response'
function likeIt(){
 let response = prompt ("Did you like my page?");
 // print message in console
 console.log("User said: " + response);
        
 // CONDITIONAL LOGIC
 if(response == "Yes"){
   document.write("Come back soon!");
 } else if (response === "No"){
   document.write("Thanks for visiting!");
 } else {
   document.write("That is not a response I was looking for...");
 }
}      

// let userNum = prompt("Guess what number I'm thinking of");

// if (userNum === 42) {
//   console.log("You guessed it!");
// } else if (userNum < 42) {
//   console.log("Your number was less than my number");
// } else if (userNum > 42) {
//   console.log("Your number was greater than my number");
// } else {
//   console.log("That's not a number");
// }


// STRUCTURE OF A FUNCTION

// FUNCTION DECLARATION
// function functionName(parameters){code to be executed} 

// function addTwoNumbers(number1, number2){
//   return number1 + number2;
//   console.log(number1 + number2);
// }

// addTwoNumbers("Hello ", "world");  

let userName = '';

function getName(){
  userName = prompt("What is your name?");
  // print message to console
  console.log('User entered: ' + userName);
  // write message to the HTML document
  document.write("Greetings, " + userName + ", welcome to my page!");
}

function getDogPossession(){
  let response = prompt("Do you have a dog?")
  if (response.toLowerCase() == "yes") {
    alert("Oh cool!")  
  }
  else if (response.toLowerCase() == "no") {
    alert("Maybe you should look into it")
  }
  else {
    alert("That's not the answer I'm looking for")
  }
}

function yourDogsColor(){
  let guess = prompt("Guess the color of my dog");
  if (guess === 'brown'){
    document.write("You're correct, " + userName + "!")
  } else {
    guess = prompt("Guess again!)");
  }
}

getName()
getDogPossession()
yourDogsColor()
likeIt()
