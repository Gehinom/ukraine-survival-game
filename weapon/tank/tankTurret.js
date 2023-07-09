import { ctx } from "../../canvas.js"
import { createImage } from "../../image.js"
import { gameState } from "../../gameState.js"
import { shellExplosion } from "./shellExplosion.js"

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

function explode() {
  shellExplosion(this)
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
