import { gameState } from "./gameState.js"
import { ctx, canvas} from "./canvas.js"

export function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  gameState.player.update()
  gameState.player.draw()

  for (let enemy of gameState.enemies) {
    enemy.update()
    enemy.draw()
  }

  requestAnimationFrame(gameLoop)
}
