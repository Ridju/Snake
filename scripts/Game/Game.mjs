class Game { 
    constructor(canvas, snake, food, backgroundColor) { 
        this.directionEnum = { UP: false, DOWN: false, LEFT: false, RIGHT: false };
        this.keyPresses = {};
        this.backgroundColor = backgroundColor;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.gameOver = false;
        this.snake = snake;
        this.food = food;
        this.direction = { x: 0, y: 0 };
        this.directionEnum = { UP: false, DOWN: false, LEFT: false, RIGHT: false };
        this.points = 0;
        
        window.addEventListener('keydown', (event) => {
            this.keyPresses[event.key] = true;
        }, false);
        
        window.addEventListener('keyup', (event) => {
            this.keyPresses[event.key] = false;
        }, false);
    }

    draw() { 
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw(this.ctx);
        this.food.draw(this.ctx);
    }

    getDirection() { 
        if(this.keyPresses.w && !this.directionEnum.DOWN){
            this.directionEnum = {UP:true, DOWN:false, LEFT:false, RIGHT:false};
            return {x: 0, y: -this.snake.size};
        } else if(this.keyPresses.s && !this.directionEnum.UP) {
            this.directionEnum = {UP:false, DOWN:true, LEFT:false, RIGHT:false};
            return {x: 0, y: this.snake.size};
        } else if(this.keyPresses.a && !this.directionEnum.RIGHT) { 
            this.directionEnum = {UP:false, DOWN:false, LEFT:true, RIGHT:false};
            return {x: -this.snake.size , y: 0};
        } else if(this.keyPresses.d && !this.directionEnum.LEFT) { 
            this.directionEnum = {UP:false, DOWN:false, LEFT:false, RIGHT:true};
            return {x: this.snake.size, y: 0};
        } else { 
            return this.direction;
        }
    }

    loop() { 
        this.direction = this.getDirection();
        if(this.snake.move(this.direction.x, this.direction.y, this.food)) { 
            this.points += 10;
        }
        this.gameOver = this.snake.getCollision(this.canvas);
        this.draw();
    }
}

export default Game;