import { ctx } from "./canvas.js"
import { enemyRifleFire } from "./weapon/rifle.js"
import { gameState } from "./gameState.js"

export const enemySize = {
  width: 50,
  height: 50,
}

export function createEnemy(enemy) {
  return {
    img: createImage('enemiesImg/orc_idle.png'),
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
    isPreparinToFire: false,
  } 
}

export function createTank(enemy) {
  return {
    img: createImage('enemiesImg/tank.png'),
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
    fire: tankFire,
    rifleCooldown: false,
    isPreparinToFire: false,
    firePreparationTime: 1000,
  } 
}

function drawEnemy() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function updateEnemy() {
  this.updateDirection()
  this.fire()
  if(!this.isPreparinToFire) {
    this.x += this.vx
    this.y += this.vy
  }
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

function tankFire() {
  if (!this.rifleCooldown) {
    console.log('enemyFire: making ogon 🔥')
    this.rifleCooldown = true
    this.isPreparinToFire = true

    setTimeout(() => {
      enemyRifleFire(this)
      this.isPreparinToFire = false
    }, this.firePreparationTime)

    setTimeout(() => {
      this.rifleCooldown = false
    }, rifleCooldownTime)
  }
}

function createImage(src) {
  const img = new Image()
  img.src = src
  return img
}

function updateEnemyDirection () {
  let distX = (gameState.player.x + gameState.player.width / 2) - (this.x + this.width / 2)
  let distY = (gameState.player.y + gameState.player.height / 2) - (this.y + this.height / 2)
  let distSq = Math.sqrt(distX * distX + distY * distY)
  this.vx = distX / distSq * this.speed
  this.vy = distY / distSq * this.speed
}
