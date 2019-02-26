
// Creating all global variables
var wins = 0;
var numberOfGuessLeft = 0;
var currentWord = "";
var letterGuessed = "";
var words = ["rockies", "skiing", "mountains", "hiking", "biking", "sunny", "west", "microbrewiers", "outdoors"];
var splitLetters = [];
var rightLetters = [];
var wrongLetters = [];
var underscore = [];
var correctLetters = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("currentWord");
var numberOfGuessText = document.getElementById("numberOfGuess");
var letterGuessedText = document.getElementById("letterGuessed");
var underscoreText = document.getElementById("underscore");

//this function picks the word from the array
pickCurrentWord = function () {
    currentWord = words[Math.floor(Math.random() * words.length)];
}

pickCurrentWord();
console.log(currentWord);

//get current word length and then add 5 for how many wrong guesses the user gets
numberOfGuess = function () {
    numberOfGuessLeft = currentWord.length + 5;
}

numberOfGuess();

//print amount of guesses before people start guessing
numberOfGuessText.textContent = "Number of Guesses Left: " + numberOfGuessLeft;

//to get the underscores for each word
for (var i = 0; i < currentWord.length; i++) {
    underscore.push(" __ ");
}

//print the underscore before people start guessing
//underscore = underscore.join(' ');
underscoreText.textContent = underscore;
//underscore = underscore.split(" ");

//get current word then split into array 
splitCurrentWord = function () {
    splitLetters = currentWord.split("");
}

splitCurrentWord();

//create another array that can be spliced without messing with origional split letter array
rightLetters = splitLetters;


//use index to loop through right letters and if letter guessed is the same get use the same index to replace
function replaceUnderlines() {

    for (var i = 0; i < rightLetters.length; i++) {
        if (rightLetters[i] == letterGuessed) {
            underscore.splice(i, 1, letterGuessed);
        }
        correctLetters = underscore.slice();
    }

    if (!rightLetters.includes(letterGuessed)) {
        numberOfGuessLeft--;
        //print *just* changed amount of guesses after wrong letter
        numberOfGuessText.textContent = "Number of Guesses Left: " + numberOfGuessLeft;
        letterGuessedText.textContent = "Letters Already Guessed: " + storeWrongLetters();
    }

}

function delayedAlert() {
    timeoutID = window.setTimeout(window.alert, 2000, 'That was really slow!');
  }

//function to add all the wrong letters together to display more than just the most recent wrong letter
function storeWrongLetters() {
    wrongLetters.push(letterGuessed);
    return wrongLetters;
}


function finshedWord() {

    if (correctLetters.toString() === splitLetters.toString() && underscore.toString() === splitLetters.toString()) {
        wins = wins + 1;
        resetGame();
    }

    else if (numberOfGuessLeft === 0) {
        resetGame();
    }

}



//reset game 
function resetGame() {
    
    numberOfGuessLeft = 0;
    currentWord = "";
    letterGuessed = "";
    words = ["rockies", "skiing", "mountains", "hiking", "biking", "sunny", "west", "outdoors"];
    splitLetters = [];
    rightLetters = [];
    wrongLetters = [];
    underscore = [];
    correctLetters = [];

    pickCurrentWord();
    console.log(currentWord);

    numberOfGuess();
    numberOfGuessText.textContent = "Number of Guesses Left: " + numberOfGuessLeft;

    for (var i = 0; i < currentWord.length; i++) {
        underscore.push(" __ ");
    }

    underscoreText.textContent = underscore;

    splitCurrentWord();

    rightLetters = splitLetters;

    replaceUnderlines();

    storeWrongLetters();

    finshedWord();

    wrongLetters = [];

}


// This function is run whenever the user presses a key.
document.onkeydown = function (event) {


    // Determines which key was pressed.
    letterGuessed = event.key;

    console.log(letterGuessed);

    //only run this function once a key was pressed
    replaceUnderlines();

    finshedWord();

    //print direction text even when keys have been pressed
    directionsText.textContent = "Press any letter to get started!";


    // Display the user letter guess, their number of guesses left, if that letter
    winsText.textContent = "Wins: " + wins;
    underscoreText.textContent = underscore;

};




