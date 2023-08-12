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
    const cards = Array.from(cardsContainer.children); // Convert NodeList to an array for easier manipulation
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
});
document.getElementById('play-again-button').addEventListener('click', function() {
    shuffleCards();
 document.getElementById('winner-message').style.display = 'none';
});








/*
//Card Flip
function flipCard(card) {
    card.classList.add('flipped');
    flippedCards.push(card);


    if (flippedCards.length === 2) {
        setTimeout(resetCards, 1000);
    }
}
 function resetCards() {
    // Loop through each flipped card and remove the 'flipped' class
    for (const card of flippedCards) {
        card.classList.remove('flipped');
    }
}

    // Clear the flippedCards array
    flippedCards = [];



    function checkMatch() {
        const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.card[0] === secondCard.dataset.card[0]) {
            // Increment the matched pairs count
            matchedPairsCount++; 
        } else {
            // Cards don't match, flip them back
            firstCard.querySelector('.front').style.transform = 'rotateY(180deg)';
            firstCard.querySelector('.back').style.transform = 'rotateY(0deg)';
        
            secondCard.querySelector('.front').style.transform = 'rotateY(180deg)';
            secondCard.querySelector('.back').style.transform = 'rotateY(0deg)';
        }
        flippedCards = [];
        isCardFlipping = false;
}
function checkWinCondition() {
    if (matchedPairsCount === totalPairs) {
        setTimeout(() => {
            alert('Congratulations! You won the game.');
            resetGame();
        }, 500);
    }
}

function resetCards() {
    // Loop through each flipped card and remove the 'flipped' class
    for (const card of flippedCards) {
        card.classList.remove('flipped');
    }
}

    // Clear the flippedCards array
    flippedCards = [];


function resetGame() {
    // Reset matched pairs count
    matchedPairsCount = 0;
   
    // Flip all cards back to the front
    const cards = document.querySelectorAll('.dogcard');
    cards.forEach(card => {
        card.querySelector('.front').style.transform = 'rotateY(180deg)';
        card.querySelector('.back').style.transform = 'rotateY(0deg)';
    });
    
    // Reset flipped cards array (just in case)
    flippedCards = [];
}

// Add event listener for the "Play Again" button
document.getElementById('play-again-button').addEventListener('click', resetGame);



//Reset and Shuffle
function resetCards() {
    flippedCards.forEach(card => card.classList.remove('flipped'));
    flippedCards = [];
}

function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
}

// Timer starts here
let secondsRemaining = 120;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            endGame();
            return
        }
        timer.textContent = secondsRemaining--;
    }, 1000);
}
startTimer();


//Code to debug for more User Interface

// Variables to hold the flipped cards
let matchedPairsCount = []
let totalPairs = []
let flippedCards = [];
let isCardFlipping = false;

// Adding an event listener to all the cards
const cards = document.querySelectorAll('.dogcard');

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

const cards = document.querySelectorAll(".dogcard");
const timer = document.getElementById("timer");
const button = document.querySelector("#play-again-button");
const wrongMessage = document.getElementById("wrong-message");


let flippedCards = [];
let gameStarted = false;
let matchedPairs = 0;
let secondsRemaining = 120;
let timerInterval;
let lockedBoard = false;

let flippedCards = [];

function flipCard(card) {
    if (card.classList.contains("flipped") || flippedCards.length === 2) {
        return;
    }
    card.classList.add("flipped");
    flippedCards.push(card);
    if (flippedCards.length === 2) {



        document.addEventListener("click", function(event) {
            // Ensure the clicked element is a card.
            if (event.target.classList.contains("dogcard")) {
                flipCard(event.target);
            }
        }); 
/*function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        console.log("run")
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
    if (flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
         matchedPairs++; //increase the matched cards
         checkWinCondition(); // win check
            flippedCards= [];
        } else {
            setTimeout(() => {
                resetCards();
            }, 1000);
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
    wrongMessage.style.display = "block";  // wrong card message
        setTimeout(() => {
            wrongMessage.style.display = "none";  
            flippedCards = [];  // 
        }, 1000);
    }
}  
function checkWinCondition() {
    if (matchedPairs === cards.length / 2) {
        endGame(true);  // Call endGame function with a true parameter indicating a win
    }
}

function endGame(isWin) {
    if (isWin) {
        winMessage.style.display = "block";  // Display winning message
    } else {
        
    }
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




