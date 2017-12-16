class Snake {
  constructor(canvas, x, y) {
    this.x = x
    this.y = y
    this.length = 5
    this.snake = []
    this.size = 10
    this.score = 0
    this.c = canvas.getContext('2d')
    this.init()
  }

  init() {
    for (let i = this.length - 1; i >= 0; i--) {
      this.snake.push({ x: i, y: 0 })
    }
  }

  draw() {
    this.c.fillText(`Score: ${this.score}`, 350/2, 10)

    this.snake.forEach(block => {
      this.c.fillRect(
        block.x * this.size,
        block.y * this.size,
        this.size,
        this.size
      )
      this.c.strokeStyle = 'darkgreen'
      this.c.strokeRect(
        block.x * this.size,
        block.y * this.size,
        this.size,
        this.size
      )
    })
  }

  move(direction) {
    let snakeX = this.snake[0].x
    let snakeY = this.snake[0].y
    switch (direction) {
      case 37:
        snakeX--
        break
      case 38:
        snakeY--
        break
      case 39:
        snakeX++
        break
      case 40:
        snakeY++
        break
      default:
        snakeY++
    }
    this.reArrange(snakeX, snakeY)
  }

  reArrange(x, y) {
    this.tail = this.snake.pop()
    this.tail.x = x
    this.tail.y = y
    this.snake.unshift(this.tail)
    this.x = this.snake[0].x
    this.y = this.snake[0].y
    this.draw()
  }

  levelUp() {
    this.snake.push({ x: this.snake[0].x, y: this.snake[0].y })
    this.score++
  }
}

export default Snake
