//what are the constants//
document.addEventListener("DOMContentLoaded", function() {
const card =[ "card a1", "card a2", "card b1", "card b2", "card c1", "card c2", "card d1", "card d2", "card e1", "card e2", "card f1" , "card f2"]
const cards = document.querySelectorAll(".dogcard");
const timer = document.getElementById("timer");
const resetButton = document.querySelector("button");
const wrongMessage = document.getElementById("wrong-message");


//What are the variables://
let flippedCards = [];
let matchedPairs = 0;
let secondsRemaining = 0;




//functions//

//const shuffleCards = Array.from(cards);
//shuffleArray(shuffleCards) Fidher-Yates;


function shuffleCards(dogCards) {
    for (let i =dogCards.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * i +1)
        [card[i], card[j]] = [card[j], card[i]]
    }
    console.log (dogCards)
    //return dogCards;
};

function resetFlippedCards() {
    flippedCards.forEach(card => card.classList.remove("flipped"));
    flippedCards = [];

    function checkMatching() {
        const [card1, card2] = flippedCards;
        const card1Value = card1.dataset.card;
        const card2Value = card2.dataset.card;
        return card1Value === card2Value;// intergrate into flip card function
        
        
    function handleMatch() {
            const [card1, card2] = flippedCards;
            if (card1.dataset.card === card2.dataset.card) {
                card1.classList.add("matched");
                card2.classList.add("matched");
        
               flippedCards[];
                matchedPairs++;
            if (matchedPairs === cards.length / 2) {
                endGame();
            }

    function endGame() {

    function resetGame() {
        resetFlippedCards();
        matchedPairs = 0;
        secondsRemaining = 30; // Reset timer if needed
        wrongMessage.style.display = "none";

    cards.forEach(function (card) {
    card.addEventListener("click", function() {
        if (!card.classList.contains("flipped") && flippedCards.length <2) {
                    filpCard(card);
                }



    resetButton.addEventListener("click", function () {
        resetGame();
    });
    
    function timerCountDownCountdown() {
        let seconds = 30;
      
        function timerCountDown() {
            let seconds = 30;
          if (secondseconds > 0) {
            console.log(seconds + " seconds remaining");
            seconds--;
            setTimeout(updateCountdown, 1000);
          } else {
            console.log("Time's up!");
          }
          
          
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
   startTimer();

   const shuffleCards = Array.from(cards);
   shuffleArray(shuffledCards);






    //function timerCountDown() {
      //let seconds = 30;
      //if (secondseconds > 0) {
        //console.log(seconds + " seconds remaining");
        //seconds--;
       // setTimeout(updateCountdown, 1000);
      //} else {
        //console.log("Time's up!");
      //}
// Handle a matched pair of cards
//function handleMatch() {
   // const [card1, card2] = flippedCards;
    //if (card1.dataset.card === card2.dataset.card) {
        //card1.classList.add("matched");
        //card2.classList.add("matched");

        //flippedCards[];
       // matchedPairs++;
    //if (matchedPairs === cards.length / 2) {
       // endGame();
   // }
   //wrongMessage.style.display = "block";
       // setTimeout(() => {
       // card1.classList.remove("flipped");
       // card2.classList.remove("flipped");
       // flippedCards = [];
       // wrongMessage.style.display = "none";
    //}, 1000);
//}

 //function checkMatching() {
   // const [card1, card2] = flippedCards;
   // const card1Value = card1.dataset.card;
   // const card2Value = card2.dataset.card;
   // return card1Value === card2Value;// intergrate into flip card function
//}
// Reset flipped cards if they don't match//
 //function resetFlippedCards() {
   // flippedCards.forEach(card => card.classList.remove("flipped"));
    //flippedCards = [];

   // resetFlippedCards();// intergrate into flip card fucntion
//}


//addEventListener//
//document.addEventListener("DOMContentLoaded", function() {

   // cards.forEach(function (card) {
       // card.addEventListener("click", function() {
           // if (!card.classList.contains("flipped") && flippedCards.length <2) {
               // filpCard(card);
           // }
        
//resetButton.addEventListener("click", function () {
    //resetGame();
//});