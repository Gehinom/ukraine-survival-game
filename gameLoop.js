export function gameLoop() {
  console.log("Loop")
  requestAnimationFrame(gameLoop)
}
