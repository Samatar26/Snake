import Snake from './snake'
import './index.css'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth / 2
canvas.height = window.innerHeight / 2

const snake = new Snake(canvas, 50, 300)

const animate = e => {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  snake.move()
}

requestAnimationFrame(animate)
