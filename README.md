What the project does:
    this is a colorado hangman game
Why the project is useful:
    great practice in javascript
How users can get started with the project:
    you need to open it up and click a letter in order to start the game
Where users can get help with your project:  
    reach out to me through slack or bootcampspot
Who maintains and contributes to the project:    
    lindsay maintains it 


description of the problem: have a word picked from an array and the number of letters in that array printing onto the screen. when the user guesses a letter it checks the current word and if it is in the word replaces the line with the letter, if not it prints the letter at the bottom for the user to know it has been guessed. when the word completes it increments the wins.

how you solved it/technical approach: created an array of words where it would randomly pick a word in the array to print the number of lines that corresponded to the number of letters in the word. also would print the number of guess you get to be 5 higher than the number of letters in the word. on key down, it would check the current letter guessed and compare it to the current word, if there was a match it would find the index placement of letter and splice the array of underlines and replace it with the letter. when all the letters in the word were guessed it would increment the wins and print another word.


