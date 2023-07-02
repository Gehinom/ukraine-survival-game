import { canvas, ctx } from "./canvas.js"

export const enemySize = {
  width: 50,
  height: 50,
}

export function createEnemy(enemy) {
  return {
    img: createImage(),
    x: enemy.x,
    y: enemy.y,
    height: enemySize.width,
    width: enemySize.height,
    vx: enemy.vx,
    vy: enemy.vy,
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
