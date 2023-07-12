import { ctx } from "./canvas.js"
import { gameState } from "./gameState.js"

function drawPlayerHp() {
  const text = "Health Points: " + gameState.player.hp
  ctx.save();
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 200, 16+8+8);
  ctx.fillStyle = '#fff';
  ctx.font = "bold 16px serif"
  ctx.fillText(text, 8, 16+8)
  ctx.restore();
}

export function drawPlayerStats() {
  drawPlayerHp()
}