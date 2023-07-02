import { gameLoop } from "./gameLoop.js"
import { spawnEnemies } from "./spawnEnemies.js"
import { gameState } from "./gameState.js"
import { setCanvasSize } from "./canvas.js"

export function startGame() {
  console.log("gameManager: Start Game")
  gameLoop()
  console.log("gameManeger, gameState: ", gameState)
  console.log("gameManager, spawning enemies")
  spawnEnemies()
  console.log("gameManeger, gameState: ", gameState)
  setCanvasSize()
}
