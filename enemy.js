import { ctx } from "./canvas.js"

export function createEnemy() {
  return {
    x: 0,
    y: 0,
    height: 50,
    width: 50,
    vx: 10,
    vy: 5,
    draw: drawEnemy,
    update: updateEnemy,
  } 
}

function drawEnemy() {
  console.log('drawEnemy')
  console.log(this)
  ctx.fillRect(this.x, this.y, this.height, this.width)
}

function updateEnemy() {
  this.x += this.vx
  this.y += this.vy
  console.log('updateEnemy') 
}