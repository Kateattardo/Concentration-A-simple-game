//Constants

    const cards = document.querySelectorAll(".dogcard");
    const timer = document.getElementById("timer");
    const button = document.querySelector("play-again-button");
    const wrongMessage = document.getElementById("wrong-message");

    let gameStarted = false;
    let flippedCards = [];
    let matchedPairs = 0;
    let secondsRemaining = 120; // Initial time
    let timerInterval;
    let lockedBoard = false;
    let unlockBoard = true;

//flip cards
    function flipCard(card) {
        if (boardLocked || card.classList.contains("flipped")) {
            return;
        }
        card.classList.add("flipped");
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            lockBoard();
        if (checkMatching()) {
                handleMatch();
        } else {
                setTimeout(() => {
                resetFlippedCards();
                unlockBoard();
                }, 1000);
            }
        }
    }

    // Check if the flipped cards match
    function checkMatching() {
        const [card1, card2] = flippedCards;
        const card1Value = card1.dataset.card;
        const card2Value = card2.dataset.card;
        return card1Value === card2Value;
    }
    console.log(checkMatching)
    // Matched cards
    function handleMatch() {
        const [card1, card2] = flippedCards;
        card1.classList.add("matched");
        card2.classList.add("matched");
        flippedCards = [];
        matchedPairs++;
        if (matchedPairs === cards.length / 2) {
            endGame();
        }
    }
    console.log(handleMatch)

     // Timer function
     function startTimer() {
        timerInterval = setInterval(function () {
            if (secondsRemaining > 0) {
                secondsRemaining--;
                timer.textContent = secondsRemaining;
            } else {
                clearInterval(timerInterval);
                endGame(); // End
                function endGame() {
                    clearInterval(timerInterval);
                }
            }
        }, 1000);
    }
    console.log(startTimer)

    function lockBoard() {
        boardLocked = true;
    }
    
    function unlockBoard() {
        boardLocked = false;
    }
    // Reset 
    function resetGame() {
    resetFlippedCards();
    matchedPairs = 0;
    secondsRemaining = 120;
    wrongMessage.style.display = "none";
    clearInterval(timerInterval);
    timer.textContent = secondsRemaining;
    const shuffledCards = Array.from(cards);
    shuffleArray(shuffledCards);
    cards.forEach(card => {
        card.classList.remove("matched");
    });
    startTimer();
}
console.log(resetGame)

    // Reset flipped cards if no match
    function resetFlippedCards() {
        flippedCards.forEach(card => card.classList.remove("flipped"));
        flippedCards = [];
    }
    console.log(resetFlippedCards)

    //Start game
    function startGame() {
        if (gameStarted) {
            return;
        }
        gameStarted = true;
        startTimer();
    const shuffledCards = Array.from(cards);
    shuffleArray(shuffledCards);

    // End
    function endGame() {
        clearInterval(timerInterval);
    }


    
    


    // Shuffle cards "Fisher-Yates"
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }
    console.log(shuffleArray)



        //Event listeners
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".dogcard");
        cards.forEach(card => {
            card.addEventListener("click", startGame);
        });

    // Add click event listeners to cards
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            if (!card.classList.contains("flipped") && flippedCards.length < 2) {
                flipCard(card);
            }
        });
    });

    // Add click event listener to reset button
    button.addEventListener("click", function (playAgainButton) {
        resetGame(playAgainButton);
        unlockBoard(playAgainButton);
    });

   




   
