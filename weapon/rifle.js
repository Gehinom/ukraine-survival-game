import { ctx, canvas } from "../canvas.js"
import { gameState } from "../gameState.js"

export const bulletSize = {
  width: 20,
  height: 20,
}

export function enemyRifleFire(enemy) {
  const distX = (enemy.x + enemy.width / 2) - (gameState.player.x + gameState.player.width / 2)
  const distY = (enemy.y + enemy.height / 2) - (gameState.player.y + gameState.player.height / 2)
  const dist = Math.sqrt(distX * distX + distY * distY)

  const bullet = createRifleBullet({
    x: enemy.x,
    y: enemy.y,
  })

  bullet.vx = - distX / dist * bullet.speed
  bullet.vy = - distY / dist * bullet.speed

  gameState.enemyBullets.push(bullet)
}

function createRifleBullet(position) {
  return {
    img: createBulletImage(),
    x: position.x,
    y: position.y,
    height: bulletSize.width,
    width: bulletSize.height,
    vx: 0,
    vy: 0,
    update: updateRifleBullet,
    draw: drawRifleBullet,
    speed: 10,
  }
}

function createBulletImage() {
  const img = new Image()
  img.src = "img/enemy/weapon/Bullet-With-Fireball.gif"
  return img
}

function drawRifleBullet() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function updateRifleBullet() {
  this.x += this.vx
  this.y += this.vy
}
