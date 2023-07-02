import { gameState } from "./gameState.js"
import { createEnemy, enemySize } from "./enemy.js"

export function spawnEnemies() {
  const enemiesNum = 10
  spawnInfantryWaveNorth(enemiesNum)
}

function spawnInfantryWaveNorth(enemiesNum) {
  for (let i = 0; i < enemiesNum; i++) {
    const enemy = createEnemy({
      x: i * 100,
      y: -enemySize.height,
      vx: 0,
      vy: 1,
    })
    gameState.enemies.push(enemy)
  }
}
