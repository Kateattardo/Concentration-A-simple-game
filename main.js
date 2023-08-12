// Variables//Cached 
const timer = document.getElementById("timer");
const cards = document.querySelectorAll(".dogcard");
let flippedCards = [];
let isCardFlipping = false;
let matchedPairsCount = 0;
const totalPairs = 6;


shuffleCards();
function shuffleCards() {
    const cardsContainer = document.querySelector('.cards');
    const cards = Array.from(cardsContainer.children);
    let currentIndex = cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    // Append cards to the DOM in shuffled order
    cards.forEach(card => cardsContainer.appendChild(card));
}


function flipCard(card) {
    card.classList.add('flipped'); // Mark the card as flipped.
    flippedCards.push(card); // Add the card to the flippedCards array.

    // If two cards are flipped.
    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;

    // Compare the data attributes of the two cards to determine if they match.
    if (card1.getAttribute('data-card') === card2.getAttribute('data-card').charAt(0) + '1' || 
        card1.getAttribute('data-card') === card2.getAttribute('data-card').charAt(0) + '2') {
        
        // Handle matched cards (e.g., mark them as matched, play a sound, etc.).
        handleMatchedCards(card1, card2);

    } else {
        // If the cards do not match, flip them back after a short delay.
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            resetFlippedCards();
        }, 1000);
    }
}

function handleMatchedCards(card1, card2) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    resetFlippedCards();
    checkForWin();
}

function checkForWin() {
    const allCards = document.querySelectorAll('.dogcard');
    const matchedCards = document.querySelectorAll('.dogcard.matched');

    if (allCards.length === matchedCards.length) {
        displayWinnerMessage();
    }
}

function displayWinnerMessage() {
    const winnerMessage = document.getElementById('winner-message');
    winnerMessage.style.display = 'block';
}

function resetFlippedCards() {
    flippedCards = [];
}

// Event listeners
document.querySelector('.cards').addEventListener('click', function(event) {
    const card = event.target.closest('.dogcard');
    if (card && !card.classList.contains("flipped") && flippedCards.length < 2) {
        flipCard(card);
    }
})

document.getElementById('play-again-button').addEventListener('click', function() {
    shuffleCards();

    cards.forEach(card => {
        card.classList.remove('flipped', 'matched');
});
 document.getElementById('winner-message').style.display = 'none';
})











