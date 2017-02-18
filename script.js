var words = [
    "cat",
    "lion",
    "hippo",
    "shark",
    "crocodile",
    "dog",
    "camel"
];
function pickword() {
    return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray(word) {
    var result = [];
    for (var i = 0; i < word.length; i++) {
        result[i] = "_";
    }
    return result;
}

function showPlayerProgress(answerArray) {
        alert(answerArray.join(" "));
}
function promptLetter(message){
    var letter = prompt(message);
    if(letter == null ){
        return false;
    }
    return letter.toLowerCase();
}
function getGuess() {
    var letter = promptLetter("Enter letter");
    while (letter !== false  && letter.length !== 1) {
        letter = promptLetter("Please write,only one letter.");
    }
    return letter;
}

function updateGameState(guess, word, answerArray) {
    var lettersGuess = 0;
    for (var i = 0; i < word.length; i++) {
        if (answerArray[i] === guess) {
            alert("This letter already exist");
           return 0
        }
        if (guess == word[i]) {
            answerArray[i] = word[i];
            lettersGuess++;
        }
    }
    if(lettersGuess === 0 ){
        lives--;
        alert(`У Вас осталось  ${lives}  жизни`)
    }
    return lettersGuess;
}


var lives = 5;
alert("Hello.Try to guess animal");
var word = pickword();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

console.log(word);
while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress(answerArray);
    var letter = getGuess();
    if(letter == false ) {
        alert("You loser");
        break
    }
    var lettersGuess = updateGameState(letter, word, answerArray);
    remainingLetters = remainingLetters - lettersGuess;

        console.log(lives + " Жизни ");
    console.log(lettersGuess);
}
alert("Great! Word is " + word);
