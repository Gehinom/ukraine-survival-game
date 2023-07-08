import { ctx } from "./canvas.js"
import { enemyRifleFire } from "./weapon/rifle.js"
import { gameState } from "./gameState.js"

export const enemySize = {
  width: 50,
  height: 50,
}

export function createEnemy(enemy) {
  return {
    img: createImage(),
    x: enemy.x,
    y: enemy.y,
    speed: 1,
    height: enemySize.width,
    width: enemySize.height,
    vx: 0,
    vy: 0,
    draw: drawEnemy,
    update: updateEnemy,
    updateDirection: updateEnemyDirection,
    fire: enemyFire,
    rifleCooldown: false,
  } 
}

function drawEnemy() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function updateEnemy() {
  this.updateDirection()
  this.x += this.vx
  this.y += this.vy
  this.fire()
}

const rifleCooldownTime = 2000

function enemyFire() {
  if (!this.rifleCooldown) {
    console.log('enemyFire: making ogon 🔥')
    this.rifleCooldown = true
    enemyRifleFire(this)

    setTimeout(() => {
      this.rifleCooldown = false
    }, rifleCooldownTime)
  }
}

function createImage() {
  const img = new Image()
  img.src = "enemiesImg/orc_idle.png"
  return img
}

function updateEnemyDirection () {
  let distX = (gameState.player.x + gameState.player.width / 2) - (this.x + this.width / 2)
  let distY = (gameState.player.y + gameState.player.height / 2) - (this.y + this.height / 2)
  let distSq = Math.sqrt(distX * distX + distY * distY)
  this.vx = distX / distSq * this.speed
  this.vy = distY / distSq * this.speed
}
