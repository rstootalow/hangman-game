var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var guess; //user guess
var letters = []; //correctly guessed letters
var wrongLetters = []; //incorrectly guessed letters
var counter = 0; //counts correct letters
var lives; //counts users lives

var wordList = ["cat", "dog", "wolf", "laser", "carrol"]; //FILL LIST LATER!!

//randomly chooses a word from wordList
var word = wordList[Math.floor(Math.random() * wordList.length)];

//choosen word is replaced with
function start() {
  for (i = 0; i < word.length; i++) {
    letters[i] = "__";
  }

  document.getElementById("answer").innerHTML = letters.join(" ");
  console.log(word);
}

function checkLetter() {
  document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    var found = false; //lets use bool to check if a letter was found
    for (i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        letters[i] = guess;
        document.getElementById("answer").innerHTML = letters.join(" ");
        found = true;
      }
    }
    //now all letters have been checked, was any found
    if (found) return; //if yes return
    
    //wrong, lets also see if 
    //it's not already logged, if not add it
    //you could also then use  wrongLetters.length
    //for working out if gueses area all used up.
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    }
  }
}

start();
checkLetter();