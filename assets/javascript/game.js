
  
// Creating variables to hold the number of wins.
var wins = 0;
var numberOfGuessLeft = 0;
var guessLeft = 0;
var currentWord = "";
var letterGuessed = "";
var words = ["rockies", "skiing", "mountains", "hiking", "biking", "sunny", "west", "microbrewiers", "outdoors"];
var splitLetters = [];
var rightLetters = [];
var wrongLetters = [];
var underscore = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("currentWord");
var numberOfGuessText = document.getElementById("numberOfGuess");
var letterGuessedText = document.getElementById("letterGuessed");
var underscoreText = document.getElementById("underscore");

//this function picks the word from the array
pickCurrentWord = function() {
    currentWord = words[Math.floor(Math.random() * words.length)];
}

pickCurrentWord();
console.log(currentWord);

//get current word length and then add 5 for how many guesses you ge
numberOfGuess = function() {
    numberOfGuessLeft = currentWord.length + 5;
}

numberOfGuess();
console.log(numberOfGuessLeft);

//to get the underscores for each word
for (var i = 0; i < currentWord.length; i++) {
    underscore.push(" __ ");
    console.log(underscore);
}


//get current word then split into array 
splitCurrentWord = function() {
    splitLetters = currentWord.split("");
}

splitCurrentWord();
console.log(splitLetters);

rightLetters = splitLetters;
console.log(rightLetters);

//using filter to find the letters that match
    
function matchingLetters(letter) {
    return letter === letterGuessed;
    }

/* function addWrongLetters (wrongLetters) {
    wrongLetters.push(letterGuessed);
    }; */

//use index to loop through right letters and if letter guessed is the same get use the same index to replace
//make a loop to check the indexs of each of the letters
function replaceUnderlines () {
    if (splitLetters.includes(letterGuessed)) {
        wins++; 

        for (var i = 0; i < splitLetters.length; i++) {
            if (splitLetters[i].value == letterGuessed) {
                splice.splice(i);
            }
        } 
    }

   else {
        numberOfGuessLeft--;
        letterGuessedText.textContent = "Letters Guessed: " + letterGuessed;
    }
}


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {


  // Determines which key was pressed.
  letterGuessed = event.key;

    console.log(letterGuessed);

    
    /* rightLetters = rightLetters.filter(function ( obj ){
        return obj.field !== letterGuessed;
    }); */
    
   
    replaceUnderlines ();

            
        
        
  
    console.log(rightLetters);
  

   

    // Hide the directions
    directionsText.textContent = "Press any key to get started!";


    // Display the user letter guess, their number of guesses left, if that letter
    // corresponds with the current word 
    winsText.textContent = "Correct Letter Guess: " + wins;
    currentWordText.textContent = "Current Word: ";
    numberOfGuessText.textContent = "Number of Guesses Remaining: " + numberOfGuessLeft; 
    
    underscoreText.textContent = underscore;


  };


