//what are the constants//
const card =[ "card a1", "card a2", "card b1", "card b2", "card c1", "card c2", "card d1", "card d2", "card e1", "card e2", "card f1" , "card f2"]

//What are the variables://
let flip = filpCard()
let match = matchCard()
let matchCard = removeMatchedCards()
let timer = timerCountDown ()
let button = playAgain ()


// game variables: what changes in the game? score restults, wahat games as game continues?//



//cached elements//
const card = document.getElementsByClassName("cards");
const playAgainButton = document.querySelector("button")
const timerCountDown = document.querySelector(".timer")


//functions//
const card= document.querySelectorAll(".dogCards");
function filpCard(dogCard){
    getElementsByClassName("dogCard")
}
cards.forEach(cards =>cards.addEventListener("click", flipCard));

function timerCountDownCountdown() {
    let seconds = 30;
  
    function timerCountDownCountdown() {
      if (seconds > 0) {
        console.log(seconds + " seconds remaining");
        seconds--;
        setTimeout(updateCountdown, 1000); // Update countdown every second (1000ms)
      } else {
        console.log("Time's up!");
      }
    }
  
    updateCountdown(); // Start the countdown
  }
  
  startCountdown();

//function matchCard(removeMatchedCards){

}

function timer(timerCountDown){

}

function playAgainButton(){

}
//flip cards
//remove matches from the board
//clock timer
//reset button

//render//
function renderPlayAgainButton(){

}
function renderMessage("wrong card") {

}


//event listeners/

.cards forEach (document.addEventListener("click", flipCard));//

