var textAreaBorder = document.querySelector("#text-area");
var textArea = document.querySelector("#text-area");
var originalText = document.querySelector(".text-section-div p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");

var timer = 0;

// Add leading zero to numbers 9 or below:



// Run a standard minute/second/hundredths timer:
//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));
function startTimer() {
    theTimer.innerHTML = timer;
    timer++;
}


// Match the text entered with the provided text on the page:
function spellCheck() {
    var userText = textArea.value;
    console.log(userText);
}


// Start the timer:
function start() {
    var userTextLength = textArea.value.length;
    if(userTextLength === 0){
        setInterval(startTimer,10);
    }
}


// Reset everything:
function reset() {
    console.log("You Clicked Me!");
}


// Event listeners for keyboard input and the reset button:
textArea.addEventListener('keypress',start);
textArea.addEventListener('keyup',spellCheck);
resetButton.addEventListener('click',reset);
