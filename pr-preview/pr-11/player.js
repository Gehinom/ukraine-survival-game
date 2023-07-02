import { canvas, ctx } from "./canvas.js"
import { gameState } from "./gameState.js"

const playerWidth = 50;
const playerHeight = playerWidth * 1080 / 640; // 1.6875

export function spawnPlayer() {
  gameState.player = {
    img: createImage(),
    x: 0,
    y: 0,
    height: playerHeight,
    width: playerWidth,
    vx: 1,
    vy: 0,
    draw: drawPlayer,
    update: updatePlayer,
  }
}

function createImage() {
  const img = new Image()
  img.src = "playerImg/saint-javelin-skin-1.webp"
  return img
}

function drawPlayer() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

function updatePlayer() {
  this.x += this.vx
  this.y += this.vy
}
