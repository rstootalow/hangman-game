/* GLOBAL VARIABLES TO BE USED THROUGHOUT THE GAME */

// CREATE A WORD BANK (ARRAY) THE USER WILL BE GUESSING FROM

var gameWords = [
    "Nirvana",
    "Radiohead",
    "2pac",
    "Wu-tang",
    "Soundgarden",
    "Weezer",
    "Tool",
    "Beck",
    "Outkast",
    "Pantera"
];

// PICK A RANDOM WORD FROM THE ARRAY AS THE WORD TO GUESS
var wordToGuess = gameWord[Math.floor(Math.random() * gameWord.length)];

// CREATE ARRAY TO SHOW HOW MANY LETTERS ARE IN THE WORD BEING GUESSED
var userGuess = [];

// FOR LOOP TO ITERATE THROUGH RANDOMLY CHOSEN WORD AND POPULATE THAT FIELD WITH UNDERSCORES
for(var i = 0; i < wordToGuess.length; i++) {
    userGuess[i] = "_";
}





