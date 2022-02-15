class Snake {
  constructor(color, size) {
    this.elements = [{ x: 160, y: 32 }];
    this.color = color;
    this.size = size;
    this.headColor = "yellow";
  }

  draw(ctx) {
    ctx.fillStyle = this.headColor;
    this.elements.forEach((element) => {
      ctx.fillRect(element.x, element.y, this.size, this.size);
      ctx.fill();
      ctx.fillStyle = this.color;
    });
  }

  getCollision(canvas) {
    //Snake hit itself
    const result = this.elements.filter((element) => {
      return (
        element.x === this.elements[0].x && element.y === this.elements[0].y
      );
    });

    var collisionDetected = result.length > 1;

    //Snake hit border
    if (
      this.elements[0].x < 0 ||
      this.elements[0].x > canvas.width ||
      this.elements[0].y < 0 ||
      this.elements[0].y > canvas.height
    ) {
      collisionDetected = true;
    }

    return collisionDetected;
  }

  move(dx, dy, food) {
    const head = { x: this.elements[0].x + dx, y: this.elements[0].y + dy };
    this.elements.unshift(head);
    const has_eaten =
      this.elements[0].x === food.x && this.elements[0].y === food.y;
    if (has_eaten) {
      food.genNew();
      return true;
    } else {
      this.elements.pop();
      return false;
    }
  }
}

export default Snake;
