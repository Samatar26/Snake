import Snake from './snake'
import Point from './point'
import './index.css'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 350
canvas.height = 350

const snake = new Snake(canvas, 0, 0)
let point = new Point(
  canvas,
  Math.floor(Math.random() * 30 + 1),
  Math.floor(Math.random() * 30 + 1)
)
let direction

const animate = e => {
  c.clearRect(0, 0, canvas.width, canvas.height)
  point.draw()
  snake.move(direction)

  if (getDistance(snake.x* 10, snake.y* 10, point.x * 10, point.y * 10) < 10) {
    point.reDraw()
    snake.levelUp()
  }
}

const getDistance = (x1, y1, x2, y2) => {
  let xDistance = x2 - x1
  let yDistance = y2 - y1
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

const setDirection = e => (direction = e.keyCode)
window.addEventListener('keydown', setDirection)
setInterval(function () {
  animate()
}, 80);
