class Snake {
  constructor(canvas, width, height) {
    this.x = width
    this.y = height
    this.c = canvas.getContext('2d')
  }

  draw() {
    this.c.fillRect(this.x, this.y, 10, 10)
  }

  move(direction) {
    this.draw()
    switch (direction) {
      case 37:
        this.x -= 1
        break
      case 38:
        this.y -= 1
        break
      case 39:
        this.x += 1
        break
      case 40:
        this.y += 1
    }
  }
}

export default Snake
