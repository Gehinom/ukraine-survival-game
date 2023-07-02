import { gameState } from "./gameState.js"
import { createEnemy } from "./enemy.js"

export function spawnEnemies() {
  const enemiesNum = 10
  for (let i = 0; i < enemiesNum; i++) {
    const enemy = createEnemy()
    gameState.enemies.push(enemy)
  }
}
