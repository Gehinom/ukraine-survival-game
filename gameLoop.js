import { gameState } from "./gameState.js"
import { ctx, canvas} from "./canvas.js"
import { isCollision } from "./collisions.js"
import { drawPlayerStats } from "./playerStats.js"
import { drawExplosion } from "./weapon/tank/shellExplosion.js"

export function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  gameState.player.update()
  gameState.player.draw()

  for (let enemy of gameState.enemies) {
    enemy.update()
    enemy.draw()
    if (isCollision(gameState.player, enemy)) {
      gameState.player.hp -= 1
    }
  }

  for (let enemyBullet of gameState.enemyBullets) {
    enemyBullet.update()
    enemyBullet.draw()
    if (isCollision(gameState.player, enemyBullet)) {
      gameState.player.hp -= 1
    }
  }

  for (let enemyTankShell of gameState.enemyTankShells) {
    enemyTankShell.update()
    enemyTankShell.draw()
    if (isCollision(gameState.player, enemyTankShell)) {
      enemyTankShell.explode()
    }
  }

  for (let explosion of gameState.tankShellExplosions) {
    drawExplosion(explosion)
  }

  drawPlayerStats()
  requestAnimationFrame(gameLoop)
}
