//Constants

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".dogcard");
    const timer = document.getElementById("timer");
    const button = document.querySelector("play-again-button");
    const wrongMessage = document.getElementById("wrong-message");

    let flippedCards = [];
    let matchedPairs = 0;
    let secondsRemaining = 120; // Initial time
    let timerInterval;

    // Shuffle cards "Fisher-Yates"
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }
    console.log(shuffleArray)

    // Reset flipped cards if no match
    function resetFlippedCards() {
        flippedCards.forEach(card => card.classList.remove("flipped"));
        flippedCards = [];
    }
    console.log(resetFlippedCards)
    

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

    // End
    function endGame() {
        clearInterval(timerInterval);
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

    // Add click event listeners to cards
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            if (!card.classList.contains("flipped") && flippedCards.length < 2) {
                flipCard(card);
            }
        });
    });

    // Add click event listener to reset button
    button.addEventListener("click", function (button) {
        resetGame(button);
    });

    // Timer function
    function startTimer() {
        timerInterval = setInterval(function () {
            if (secondsRemaining > 0) {
                secondsRemaining--;
                timer.textContent = secondsRemaining;
            } else {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
    }
    console.log(startTimer)

    // Flip a card
    function flipCard(card) {
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            if (checkMatching()) {
                handleMatch();
            } else {
                setTimeout(() => {
                    resetFlippedCards();
                }, 1000);
            }
        }
    }
    console.log(flipCard)

    // Start the game
    startTimer();
    const shuffledCards = Array.from(cards);
    shuffleArray(shuffledCards);
});



















