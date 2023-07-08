import { gameState } from "./gameState.js"
import { ctx, canvas} from "./canvas.js"
import { isCollision } from "./collisions.js"
import { drawPlayerStats } from "./playerStats.js"

export function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  gameState.player.update()
  gameState.player.draw()

  for (let enemy of gameState.enemies) {
    let distX = (gameState.player.x + gameState.player.width / 2) - (enemy.x + enemy.width / 2)
    let distY = (gameState.player.y + gameState.player.height / 2) - (enemy.y + enemy.height / 2)
    let distSq = Math.sqrt(distX + distY)
    enemy.vx = distX / distSq * 0.1
    enemy.vy = distY / distSq * 0.1
    enemy.update()
    enemy.draw()
    if (isCollision(gameState.player, enemy)) {
      gameState.player.hp -= 1
      console.log(gameState.player.hp)
    }
  }

  for (let enemyBullet of gameState.enemyBullets) {
    enemyBullet.update()
    enemyBullet.draw()
  }

  drawPlayerStats()
  requestAnimationFrame(gameLoop)
}
