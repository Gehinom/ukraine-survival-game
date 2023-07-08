import { gameState } from './gameState.js'

export function initKeyboard() {
  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('keyup', handleKeyUp) 

  function handleKeyDown(event) {
    if (event.key === 'w') {
      gameState.player.controlsState.isMovingUp = true
    }
    if (event.key === 'a') {
      gameState.player.controlsState.isMovingLeft = true
    }
    if (event.key === 's') {
      gameState.player.controlsState.isMovingDown = true
    }
    if (event.key === 'd') {
      gameState.player.controlsState.isMovingRight = true
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'w') {
      gameState.player.controlsState.isMovingUp = false
    }
    if (event.key === 'a') {
      gameState.player.controlsState.isMovingLeft = false
    }
    if (event.key === 's') {
      gameState.player.controlsState.isMovingDown = false
    }
    if (event.key === 'd') {
      gameState.player.controlsState.isMovingRight = false
    }
  }
}
