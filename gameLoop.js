import { gameState } from "./gameState.js"
import { ctx, canvas} from "./canvas.js"
import { isCollision } from "./collisions.js"

export function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  gameState.player.update()
  gameState.player.draw()

  for (let enemy of gameState.enemies) {
    enemy.update()
    enemy.draw()
    console.log(isCollision(gameState.player, enemy))
  }

  for (let enemyBullet of gameState.enemyBullets) {
    enemyBullet.update()
    enemyBullet.draw()
  }

  requestAnimationFrame(gameLoop)
}
