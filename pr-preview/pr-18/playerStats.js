import { ctx } from "./canvas.js"
import { gameState } from "./gameState.js"

function drawPlayerHp() {
  const text = "Health Points: " + gameState.player.hp
  const textX = gameState.player.x
  const textY = gameState.player.y
  ctx.fillText(text, textX, textY)
}

export function drawPlayerStats() {
  drawPlayerHp()
}