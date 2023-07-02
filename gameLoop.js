import { gameState } from "./gameState.js"

export function gameLoop() {
  console.log("Loop")
  requestAnimationFrame(gameLoop)
  for (let enemy of gameState.enemies) {
    enemy.update()
    enemy.draw()
  }
}
