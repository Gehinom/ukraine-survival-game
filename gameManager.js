import { gameLoop } from "./gameLoop.js"
import { spawnEnemies } from "./spawnEnemies.js"

export function startGame() {
console.log("gameManager: Start Game")
gameLoop()
spawnEnemies()
}
