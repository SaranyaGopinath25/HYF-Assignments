
// Fastest Presser Game

// Game state management
let gameState = {
    isActive: false,
    counter1: 0,
    counter2: 0,
    gameTimer: null,
    handleKeyPress: null
};

// Get DOM elements
const startBtn = document.getElementById('startBtn');
const timerInput = document.getElementById('timer');
const counter1Display = document.getElementById('counter1');
const counter2Display = document.getElementById('counter2');
const player1Area = document.getElementById('player1');
const player2Area = document.getElementById('player2');

// Initialize game
function initializeGame() {
    gameState.counter1 = 0;
    gameState.counter2 = 0;
    counter1Display.textContent = '0';
    counter2Display.textContent = '0';
}

// Handle key presses during the game
function handleKeyPress(event) {
    if (!gameState.isActive) return;
    
    if (event.key === 's' || event.key === 'S') {
        gameState.counter1++;
        counter1Display.textContent = gameState.counter1;
    } else if (event.key === 'l' || event.key === 'L') {
        gameState.counter2++;
        counter2Display.textContent = gameState.counter2;
    }
}

// Start the game
function startGame() {
    // Get timer input
    const timeDuration = parseInt(timerInput.value, 10);
    
    // Initialize game state
    initializeGame();
    gameState.isActive = true;
    
    // Disable timer and button during gameplay
    timerInput.disabled = true;
    startBtn.disabled = true;
    startBtn.textContent = 'Game Running...';
    

    // Add event listener for key presses
    gameState.handleKeyPress = (event) => handleKeyPress(event);
    document.addEventListener('keydown', gameState.handleKeyPress);

    // Set timeout for game duration
    gameState.gameTimer = setTimeout(() => {
        endGame();
    }, timeDuration * 1000);
}

// End the game and determine winner
function endGame() {
    // Stop accepting key presses
    gameState.isActive = false;
    
    // Remove event listener
    document.removeEventListener('keydown', gameState.handleKeyPress);
    
    // Clear the timer
    clearTimeout(gameState.gameTimer);
    
    // Determine the winner and animate
    if (gameState.counter1 > gameState.counter2) {
        animateWinner("player1-canvas");
    } else if (gameState.counter2 > gameState.counter1) {
        animateWinner("player2-canvas");
    } else {
        console.log("It's a tie!");
    }
    
    // Update button for restart
    startBtn.textContent = 'Restart Game!';
    startBtn.disabled = false;
    timerInput.disabled = false;
}

// Animate the winner's area with confetti
function animateWinner(winnerId) {
    console.log(`Animating winner: ${winnerId}`);
    
    // Props of confetti animation
        const confettiSettings = {
            target: winnerId,
            max: 80,
            size: 1.8,
            animate: true,
            props: ['square', 'circle', 'triangle', 'line'],
            colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
            clock: 25,
            rotate: true,
            width: window.innerWidth,
            height: window.innerHeight
        };
        
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            // Clear the confetti after 5 seconds
            setTimeout(() => confetti.clear(), 5000);
}

// Reset the game for a new round
function resetForNewGame() {
    // Clear any active timers
    if (gameState.gameTimer) {
        clearTimeout(gameState.gameTimer);
    }
    
    // Remove event listener if still active
    if (gameState.handleKeyPress) {
        document.removeEventListener('keydown', gameState.handleKeyPress);
    }
    
    // Reset game state
    initializeGame();
    gameState.isActive = false;
    
    // Reset button
    startBtn.textContent = 'Start Game!';
    startBtn.disabled = false;
    timerInput.disabled = false;
    timerInput.focus();
}

// Button click handler
startBtn.addEventListener('click', () => {
    if (startBtn.textContent === 'Start Game!') {
        startGame();
    } else if (startBtn.textContent === 'Restart Game!') {
        resetForNewGame();
    }
});



