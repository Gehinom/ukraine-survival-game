import { ctx } from "../canvas.js"
import { createImage } from "../image.js"
import { gameState } from "../gameState.js"

export const tankShellSize = {
  width: 20,
  height: 20,
}

export function enemyTankFire(enemy) {
  const distX = (enemy.x + enemy.width / 2) - (gameState.player.x + gameState.player.width / 2)
  const distY = (enemy.y + enemy.height / 2) - (gameState.player.y + gameState.player.height / 2)
  const dist = Math.sqrt(distX * distX + distY * distY)

  const tankShell = createTankShell({
    x: enemy.x,
    y: enemy.y,
  })

  tankShell.vx = - distX / dist * tankShell.speed
  tankShell.vy = - distY / dist * tankShell.speed

  gameState.enemyTankShells.push(tankShell)
}

function removeShell(tankShell) {
  const index = gameState.enemyTankShells.indexOf(tankShell)
  gameState.enemyTankShells.splice(index, 1)
}

function createTankShell(position) {
  return {
    img: createTankShellImage(),
    x: position.x,
    y: position.y,
    height: tankShellSize.width,
    width: tankShellSize.height,
    vx: 0,
    vy: 0,
    update: updateTankShell,
    draw: drawTankShell,
    speed: 10,
    explode,
  }
}

function createTankShellImage() {
  const img = new Image()
  img.src = "img/enemy/weapon/tankShell.gif"
  return img
}

function drawTankShell() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function updateTankShell() {
  this.x += this.vx
  this.y += this.vy
}

function explode() {
  console.log('Tank shell boom 🔥')
  const explosion = createExplosion(this)
  gameState.tankShellExplosions.push(explosion)

  setTimeout(function() {
    removeTankShellExplosion(explosion)
  }, explosion.animationDuration)

}

function removeTankShellExplosion(explosion) {
  const index = gameState.tankShellExplosions.indexOf(explosion)
  gameState.tankShellExplosions.splice(index, 1)
}

export function drawExplosion(explosion) {
  ctx.save()
  ctx.globalAlpha = 0.3
  ctx.drawImage(explosion.img, explosion.x, explosion.y, explosion.width, explosion.height)
  ctx.restore()

}

function createExplosion(shell) {
  return {
    img: createImage('img/enemy/weapon/tank-shell-explosion.webp'),
    x: shell.x,
    y: shell.y,
    width: 358 / 2,
    height: 200 / 2,
    animationDuration: 500,
  }
}
