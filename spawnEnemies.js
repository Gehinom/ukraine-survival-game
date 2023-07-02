import { gameState } from "./gameState.js"

export function spawnEnemies() {
  const enemiesNum = 10
  for (let i = 0; i < enemiesNum; i++) {
    const enemy = createEnemy()
    console.log("Spawning Enemy #", i)
    gameState.enemies.push(enemy)
  }
}

function createEnemy() {
  return {x: 0, y: 0, vx: 10, vy: 5}
}