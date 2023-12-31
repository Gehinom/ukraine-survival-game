import { ctx } from "../canvas.js"
import { enemyRifleFire } from "../weapon/rifle.js"
import { gameState } from "../gameState.js"
import { createImage } from "../image.js"

export const enemySize = {
  width: 50,
  height: 50,
}

export function createEnemy(enemy) {
  return {
    img: createImage('img/enemy/orc_idle.png'),
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
    isWeaponCooldown: false,
    isPreparinToFire: false,
    weaponCooldownTime: 2000
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

function enemyFire() {
  if (!this.isWeaponCooldown) {
    console.log('enemyFire: making ogon 🔥')
    this.isWeaponCooldown = true
    enemyRifleFire(this)

    setTimeout(() => {
      this.isWeaponCooldown = false
    }, this.weaponCooldownTime)
  }
}


export function updateEnemyDirection (){
  let distX = (gameState.player.x + gameState.player.width / 2) - (this.x + this.width / 2)
  let distY = (gameState.player.y + gameState.player.height / 2) - (this.y + this.height / 2)
  let distSq = Math.sqrt(distX * distX + distY * distY)
  this.vx = distX / distSq * this.speed
  this.vy = distY / distSq * this.speed
}
