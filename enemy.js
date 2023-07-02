import { canvas, ctx } from "./canvas.js"

export function createEnemy() {
  return {
    img: createImage(),
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
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function updateEnemy() {
  this.x += this.vx
  this.y += this.vy
}

function createImage() {
  const img = new Image()
  img.src = "enemiesImg/orc_idle.png"
  return img
}
