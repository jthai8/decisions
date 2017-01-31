//What number's bigger
function greaterNum(a, b) {
if (a>b){
  return a;
}  else {
  return b;
}
}

//world translator
function  helloWorld(code) {
 if (code === "es") {
   return "Hola Mundo!";
 } else if (code === "fr") {
    return "Bonjour tout le monde!";
 } else {
   return "Hello World!";
 }
}

//Grade Assigner
function assignGrade(num) {
  if (num >= 90) {
    return "A";
  } else if (num >= 80) {
    return "B";
  } else if (num >= 70) {
    return "C";
  } else if (num >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//pluralizer
function pluralize(noun, num) {
  if (num != 1) {
    return (num + " " + noun + "s");

  } else {
    return (num + " " + noun);
  }
}
 //pluralizer bonus
 function pluralize(noun, num) {
   if (num != 1 && noun === "person") {
     return (num + " people");
     if (num === 1) {
       return num + noun;
     }
   } else if (num != 1) {
     return (num + " " + noun + "s");
   } else {
     return (num + " " + noun);
   }
 }

// The odd and Even

for (i=0; i<=15; i++){
  if (i % 2 === 0){
    console.log (i + " is even number");
  } else {
    console.log (i + " is odd number");
  }
}

//the fizz buzz

for(i=0; i<=100; i++) {
  if (i%3 ===0 && i%5 === 0) {
    console.log ("FizzBuzz");
  }
    else if (i%3 === 0) {
    console.log("Fizz");
  } else if (i%5===0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Javascript Hi/Lo Game
//get user input for guessing a number between 1-100
//gen random number
//prompt user for response
//compare random number to user response
//If user picks correct number, alert You win. Game Over!
//if user response does not equal random number then alert too high or too low.
//prompt for another guess.


//hiLo
function hiLo() {
  var random = Math.floor(Math.random()*100)+1;
  var name = prompt("Please enter your first name.");
  var guess = parseInt(prompt ("Guess a number between 1-100"));
  var count = 0;
  while (random != guess && count < 7) {
    guess;
    console.log (random);
    //below tests if the value is not a numeric entry
    if (Number.isNaN(guess)) {
      alert("Please enter a numeric value.");
      guess = parseInt(prompt("Guess again"));
    } else if (random > guess){
      alert ("Number is too low");
      count = count + 1;
      guess = parseInt(prompt("Guess again"));
    } else if (random < guess){
      alert ("Number is too high");
      count = count + 1;
      guess = parseInt(prompt("Guess again"));
    }
  }
  if (count === 7) {
    alert("Too many guesses. You lose.");
  } else {
    alert ("You won "+ name + "!");
  }
}
