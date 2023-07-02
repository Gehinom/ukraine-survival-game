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
    vx: 0,
    vy: 0,
    draw: drawPlayer,
    update: updatePlayer,
    controlsState: {
      isMovingLeft: false,
      isMovingRight: false,
      isMovingDown: false,
      isMovingUp: false,
    },
    speed: 2.5,
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

  if (this.controlsState.isMovingUp) {
    this.vy = -this.speed
  }
  if (this.controlsState.isMovingDown) {
    this.vy = this.speed
  }
  if (this.controlsState.isMovingLeft) {
    this.vx = -this.speed
  }
  if (this.controlsState.isMovingRight) {
    this.vx = this.speed
  }

  if ( !this.controlsState.isMovingRight && !this.controlsState.isMovingLeft
  ) {
    this.vx = 0
  }

  if ( !this.controlsState.isMovingUp && !this.controlsState.isMovingDown) {
    this.vy = 0
  }

}
