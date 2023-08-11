// Variables
const cards = document.querySelectorAll(".dogcard");
const timerDisplay = document.getElementById("timer");
    let flippedCards = [];
    let secondsRemaining = 120;
    let timerInterval;

// Event listener to handle card clicks
document.querySelector('.cards').addEventListener('click', function(event) {
    const card = event.target.closest('.dogcard');
    if (card && !card.classList.contains("flipped") && flippedCards.length < 2) {
        flipCard(card);
    }
});
// Shuffle the cards
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
    const parentContainer = cardContainer.parentNode;
    parentContainer.removeChild(cardContainer);
    shuffledCards.forEach(card => {
        cardContainer.appendChild(card);
    });
    parentContainer.appendChild(cardContainer);
}

shuffleAndRearrange();

// Flip card function
function flipCard(card) {
    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(() => {
            resetCards();
        }, 1000);
    }
}

// Reset cards 
function resetCards() {
    flippedCards.forEach(card => card.classList.remove("flipped"));
    flippedCards = [];
}

function startTimer() {
    timerInterval = setInterval(() => {
        secondsRemaining--;
        timerDisplay.textContent = formatTime(secondsRemaining);

        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

startTimer()




/*const cards = document.querySelectorAll(".dogcard");
const timer = document.getElementById("timer");
const button = document.querySelector("#play-again-button");
const wrongMessage = document.getElementById("wrong-message");


let flippedCards = [];
let gameStarted = false;
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

function startGame() {
    if (gameStarted) return;
    gameStarted = true;
    shuffleAndRearrange();
    startTimer();
}


function flipCard(card) {
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        if(checkMatch()) {
            handleMatch();
        } else {
        setTimeout(resetCards, 1000);
    }
  }
}

function checkMatch() {
    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        return card1.dataset.card[0] === card2.dataset.card[0]; // checking if first letter of data-card is the same
    }
    return false;
}

function handleMatch() {
    flippedCards[0].classList.add("matched");
    flippedCards[1].classList.add("matched");
    flippedCards = [];
}

function resetCards() {
    flippedCards.forEach(card => card.classList.remove('flipped'));
    flippedCards = [];
}

function unlockTheBoard() {
    lockedBoard = false;
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

function endGame() {
    clearInterval(timerInterval);
    if (matchedPairs === cards.length / 2) {
        alert("Good dog");
    } else {
        alert("Nice try but no treat ");
    }

}

function lockTheBoard() {
    lockedBoard = true;
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

function resetCards(isWrongCardReset = true) {
    flippedCards.forEach(card => card.classList.remove("flipped"));
    if(isWrongCardReset) {
    wrongMessage.style.display = "block";
    setTimeout(() => {
        wrongMessage.style.display = "none";
    }, 1000);
  }
    flippedCards = [];
    
    
   



// Event Listeners
document.querySelector('.cards').addEventListener('click', function(event) {
    const card = event.target.closest('.dogcard');
        if (card && !card.classList.contains("flipped") && flippedCards.length < 2) {
            flipCard(card);
        }
    });


document.querySelector(".board").addEventListener("click", function() {
    if (!gameStarted) {
        startGame();
    }
});


button.addEventListener("click", () => {
    resetGame();
    unlockTheBoard();
});
*/
