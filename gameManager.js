import { gameLoop } from "./gameLoop.js"
import { spawnEnemies } from "./spawnEnemies.js"
import { gameState } from "./gameState.js"

export function startGame() {
  console.log("gameManager: Start Game")
  gameLoop()
  console.log(gameState)
  spawnEnemies()
  console.log(gameState)
}
