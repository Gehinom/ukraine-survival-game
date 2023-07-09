import { ctx } from "../../canvas.js"
import { gameState } from "../../gameState.js"
import { createImage } from "../../image.js"

export function shellExplosion(shell) {
  console.log('Tank shell boom 🔥')
  const explosion = createExplosion(shell)
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
