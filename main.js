const cards = document.querySelectorAll(".dogcard");
const timer = document.getElementById("timer");
const button = document.querySelector("#play-again-button");
const wrongMessage = document.getElementById("wrong-message");

let gameStarted = false;
let flippedCards = [];
let matchedPairs = 0;
let secondsRemaining = 120;
let timerInterval;
let lockedBoard = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleAndRearrange() {
    const shuffledCards = Array.from(cards);
    shuffleArray(shuffledCards);
    const cardContainer = cards[0].parentNode;
    shuffledCards.forEach(card => {
        cardContainer.appendChild(card);
    });
}

function flipCard(card) {
    if (lockedBoard || card.classList.contains("flipped")) return;

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        lockTheBoard();
        checkMatching() ? handleMatch() : setTimeout(resetCards, 1000);
    }
}

function checkMatching() {
    const [card1, card2] = flippedCards;
    return card1.dataset.card === card2.dataset.card;
}

function handleMatch() {
    flippedCards[0].classList.add("matched");
    flippedCards[1].classList.add("matched");
    flippedCards = [];
    matchedPairs++;

    if (matchedPairs === cards.length / 2) {
        endGame();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            endGame();
            return;
        }
        timer.textContent = secondsRemaining--;
    }, 1000);
}

function lockTheBoard() {
    lockedBoard = true;
}

function endGame() {
    clearInterval(timerInterval);
}

function resetGame() {
    resetCards();
    matchedPairs = 0;
    secondsRemaining = 120;
    wrongMessage.style.display = "none";
    timer.textContent = secondsRemaining;
    shuffleAndRearrange();
    startTimer();
}

function resetCards() {
    flippedCards.forEach(card => card.classList.remove("flipped"));
    flippedCards = [];
}

function startGame() {
    if (gameStarted) return;

    gameStarted = true;
    shuffleAndRearrange();
    startTimer();
}

// Event Listeners
cards.forEach(card => {
    card.addEventListener("click", () => {
        if (!card.classList.contains("flipped") && flippedCards.length < 2) {
            flipCard(card);
        }
    });
});

button.addEventListener("click", () => {
    resetGame();
    lockTheBoard();
});





   
