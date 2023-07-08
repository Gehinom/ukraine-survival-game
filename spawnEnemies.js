import { gameState } from "./gameState.js"
import { createEnemy, enemySize, createTank } from "./enemy/enemy.js"

export function spawnEnemies() {
  const enemiesNum = 10
  spawnInfantryWaveNorth(enemiesNum)
  spawnTankWaveWest(enemiesNum)
}

function spawnInfantryWaveNorth(enemiesNum) {
  for (let i = 0; i < enemiesNum; i++) {
    const enemy = createEnemy({
      x: i * 100,
      y: -enemySize.height,
    })
    gameState.enemies.push(enemy)
  }
}

function spawnTankWaveWest(enemiesNum) {
  for (let i = 0; i < enemiesNum; i++) {
    const enemy = createTank({
      x: -enemySize.width,
      y: i * (enemySize.height + 50),
    })
    gameState.enemies.push(enemy)
  }
}

