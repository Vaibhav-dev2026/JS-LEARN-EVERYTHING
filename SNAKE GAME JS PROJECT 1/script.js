const board = document.querySelector(".board");
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("highScore");
const timeEl = document.getElementById("time");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");
const levelSelect = document.getElementById("level");

const rows = 20, cols = 20;
let blocks = {};

let snake, food;
let direction = "right";
let intervalId = null;
let speed = 200;
let score = 0;
let seconds = 0;
let timerId = null;
let isPaused = false;

// Sounds
const eatSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-game-ball-tap-2073.mp3");
const gameOverSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-arcade-retro-game-over-213.mp3");

// High score
let highScore = localStorage.getItem("highScore") || 0;
highScoreEl.textContent = highScore;

/* CREATE GRID */
for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        const div = document.createElement("div");
        div.classList.add("block");
        board.appendChild(div);
        blocks[`${x}-${y}`] = div;
    }
}

function initGame() {
    snake = [
        { x: 5, y: 10 },
        { x: 4, y: 10 },
        { x: 3, y: 10 }
    ];
    food = randomFood();
    score = 0;
    seconds = 0;
    scoreEl.textContent = score;
    timeEl.textContent = "00:00";
    direction = "right";
    render();
}

function randomFood() {
    let pos;
    do {
        pos = {
            x: Math.floor(Math.random() * cols),
            y: Math.floor(Math.random() * rows)
        };
    } while (snake?.some(s => s.x === pos.x && s.y === pos.y));
    return pos;
}

function render() {
    Object.values(blocks).forEach(b => b.className = "block");
    snake.forEach(s => blocks[`${s.x}-${s.y}`].classList.add("snake"));
    blocks[`${food.x}-${food.y}`].classList.add("food");
}

function moveSnake() {
    let head = { ...snake[0] };

    if (direction === "right") head.x++;
    if (direction === "left") head.x--;
    if (direction === "up") head.y--;
    if (direction === "down") head.y++;

    if (
        head.x < 0 || head.y < 0 ||
        head.x >= cols || head.y >= rows ||
        snake.some(s => s.x === head.x && s.y === head.y)
    ) {
        gameOver();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        eatSound.play();
        score++;
        scoreEl.textContent = score;
        food = randomFood();

        // speed increase
        if (speed > 60) {
            speed -= 5;
            restartInterval();
        }
    } else {
        snake.pop();
    }

    render();
}

function startGame() {
    if (intervalId) return;
    intervalId = setInterval(moveSnake, speed);
    timerId = setInterval(() => {
        seconds++;
        timeEl.textContent =
            String(Math.floor(seconds / 60)).padStart(2, "0") + ":" +
            String(seconds % 60).padStart(2, "0");
    }, 1000);
}

function pauseGame() {
    if (!intervalId) return;
    clearInterval(intervalId);
    clearInterval(timerId);
    intervalId = null;
}

function restartInterval() {
    pauseGame();
    startGame();
}

function gameOver() {
    pauseGame();
    gameOverSound.play();

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        highScoreEl.textContent = highScore;
    }

    alert("Game Over!");
    initGame();
}

startBtn.onclick = startGame;
pauseBtn.onclick = pauseGame;
restartBtn.onclick = () => {
    pauseGame();
    initGame();
};

levelSelect.onchange = () => {
    speed = Number(levelSelect.value);
    restartInterval();
};

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && direction !== "down") direction = "up";
    if (e.key === "ArrowDown" && direction !== "up") direction = "down";
    if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (e.key === "ArrowRight" && direction !== "left") direction = "right";
});

// Mobile controls
document.querySelectorAll(".mobile-controls button").forEach(btn => {
    btn.onclick = () => direction = btn.dataset.dir;
});

initGame();
