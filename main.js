//what are the constants//
const cards =[ "card a1", "card a2", "card b1", "card b2", "card c1", "card c2", "card d1", "card d2", "card e1", "card e2", "card f1" , "card f2"]
const dogCards = document.querySelectorAll(".dogcard");
const timer = document.getElementById("timer");
const button = document.querySelector("button");


//What are the variables://
let flippedCards = [];
let matchedPairs = 0;
let secondsRemaining = 0;
let button = playAgain ()



//functions//
function shuffleCards(dogCards) {
    for (let i =dogCards.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * i +1);
    }
    return dogCards;
};
function filpCard(dogCard){
    cards.classList.add("flipped");
    flippedCards.push(dogCard);
    if (flippedCards.length === 2) {
        if(checkMatching()) {
            handleMatch();
        } else {
            setTimeout(resetFlippedCards, 1000);
        }

    }
}
cards.forEach(cards =>cards.addEventListener("click", "flipCard"));



function timerCountDownCountdown() {
    let seconds = 30;
  
    function timerCountDown() {
      if (secondseconds > 0) {
        console.log(seconds + " seconds remaining");
        seconds--;
        setTimeout(updateCountdown, 1000);
      } else {
        console.log("Time's up!");
      }
// Handle a matched pair of cards
function handleMatch() {
    const [ card1, card2] = flippedCards;
    if (card1.dataset.card === card2.dataset.card) {
        card1.classList.add("matched");
        card2.classList.add("matched");

        flippedCards[];
        matchedPairs++;
    if (matchedPairs === cards.length / 2) {
        endGame();
    }
}   else {
    setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
    }, 1000);
}


// Check if the flipped cards match//
function checkMatching() {
}
// Reset flipped cards if they don't match//
function resetFlippedCards() {
}
