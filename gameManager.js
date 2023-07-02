import { gameLoop } from "./gameLoop.js"
import { spawnEnemies } from "./spawnEnemies.js"
import { gameState } from "./gameState.js"
import { setCanvasSize } from "./canvas.js"
import { spawnPlayer } from "./player.js"
import { initKeyboard } from "./keyboard.js"

export function startGame() {
  console.log("gameManager: Start Game")

  console.log("gameManeger, gameState: ", gameState)

  console.log("gameManeger: init keyboard (wasd)")
  initKeyboard()

  console.log("gameManager: Spawn Player")
  spawnPlayer()

  console.log("gameManager, Spawn enemies")
  spawnEnemies()

  console.log("gameManeger, gameState: ", gameState)

  setCanvasSize()

  console.log("gameManager: run gameLoop")
  gameLoop()
}
