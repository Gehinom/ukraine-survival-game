import { gameState } from '../gameState.js'
import { ctx, canvas} from "../canvas.js"

export const bulletSize = {
  width: 20,
  height: 20,
}

export function enemyRifleFire(x, y) {
  const bullet = createRifleBullet({
    x: x,
    y: y,
    vx: 5,
    vy: 5,
  })
  gameState.enemyBullets.push(bullet)
}

function createRifleBullet(position) {
  return {
    img: createBulletImage(),
    x: position.x,
    y: position.y,
    height: bulletSize.width,
    width: bulletSize.height,
    vx: position.vx,
    vy: position.vy,
    update: updateRifleBullet,
    draw: drawRifleBullet,
  }
}

function createBulletImage() {
  const img = new Image()
  img.src = "../weaponImg/Bullet-With-Fireball.gif"
  console.log('bullet img: ', img)
  return img
}

function drawRifleBullet() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function updateRifleBullet() {
  this.x += this.vx
  this.y += this.vy
}
