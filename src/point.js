class Point {
  constructor(canvas, width, height) {
    this.x = width
    this.y = height
    this.c = canvas.getContext('2d')
  }

  draw() {
    this.c.fillRect(this.x * 10, this.y * 10, 10, 10)
  }

  reDraw() {
    this.x = Math.floor(Math.random() * 30 + 1)
    this.y = Math.floor(Math.random() * 30 + 1)
  }
}

export default Point
