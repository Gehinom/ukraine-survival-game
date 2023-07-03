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
    if (isCollision(gameState.player, enemy)) {
      gameState.player.hp -= 1
      console.log(gameState.player.hp)
    }
  }

  for (let enemyBullet of gameState.enemyBullets) {
    enemyBullet.update()
    enemyBullet.draw()
  }

  requestAnimationFrame(gameLoop)
}
