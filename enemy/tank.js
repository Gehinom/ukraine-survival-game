import { ctx } from "../canvas.js"
import { createImage } from "../image.js"
import { updateEnemyDirection } from "./enemy.js"
import { enemyTankFire } from "../weapon/tankTurret.js"

export const tankSize = {
  width: 50,
  height: 50,
}

export function createTank(enemy) {
  return {
    img: createImage('img/enemy/tank.png'),
    x: enemy.x,
    y: enemy.y,
    speed: 1,
    height: tankSize.width,
    width: tankSize.height,
    vx: 0,
    vy: 0,
    draw,
    update,
    updateDirection: updateEnemyDirection,
    fire,
    isWeaponCooldown: false,
    isPreparinToFire: false,
    firePreparationTime: 1000,
    weaponCooldownTime: 5000,
  } 
}

function draw() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function update() {
  this.updateDirection()
  this.fire()
  if(!this.isPreparinToFire) {
    this.x += this.vx
    this.y += this.vy
  }
}

function fire() {
  if (!this.isWeaponCooldown) {
    console.log('TankFire: making ogon 🔥')
    this.isWeaponCooldown = true
    this.isPreparinToFire = true

    setTimeout(() => {
      enemyTankFire(this)
      this.isPreparinToFire = false
    }, this.firePreparationTime)

    setTimeout(() => {
      this.isWeaponCooldown = false
    }, this.weaponCooldownTime)
  }
}
