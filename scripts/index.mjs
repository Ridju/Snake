import { Snake, Food, Game } from "./Game/index.mjs";

const GRIDDIMENSIONS = { x: 20, y: 20 };
const PIXELSIZE = 16;
const BACKGROUNDCOLOR = "black";
const SNAKECOLOR = "white";
const FOODCOLOR = "red";

const canvas = document.getElementById("icanvas");
const reloadBtn = document.getElementById("reloadBtn");
const points = document.getElementById("points");
const gameOverDisplay = document.getElementById("gameOver");

canvas.width = GRIDDIMENSIONS.x * PIXELSIZE;
canvas.height = GRIDDIMENSIONS.y * PIXELSIZE;

reloadBtn.onclick = () => reloadGame();

var food = new Food(FOODCOLOR, PIXELSIZE, canvas);
var snake = new Snake(SNAKECOLOR, PIXELSIZE);
var game = new Game(canvas, snake, food, BACKGROUNDCOLOR);

function reloadGame() {
  food = new Food(FOODCOLOR, PIXELSIZE, canvas);
  snake = new Snake(SNAKECOLOR, PIXELSIZE);
  game = new Game(canvas, snake, food, BACKGROUNDCOLOR);
}

function main() {
  gameOverDisplay.hidden = !game.gameOver;
  if (!game.gameOver) {
    game.loop();
    points.innerHTML = game.points;
  }
  setTimeout(requestAnimationFrame, 100, main);
}

main();
