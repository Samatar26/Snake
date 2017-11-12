class Snake {
  constructor(canvas, width, height) {
    this.x = width
    this.y = height
    this.c = canvas.getContext('2d')
  }

  draw() {
    this.c.fillRect(this.x, this.y, 10, 10)
  }

  move() {
    this.draw()
    this.x += 1
  }
}

export default Snake
