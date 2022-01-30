class Food {
    constructor(color, size, canvas) { 
        this.color = color;
        this.size = size;
        this.canvas = canvas;
        this.x = 16;
        this.y = 16;
    }

    draw(ctx) { 
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill()
    }

    genNew(){ 
        this.x = Math.floor(Math.random() * Math.floor(this.canvas.width / this.size)) * this.size;
        this.y = Math.floor(Math.random() * Math.floor(this.canvas.height / this.size)) * this.size;
    }

}

export default Food;