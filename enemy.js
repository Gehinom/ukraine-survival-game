export function createEnemy() {
  return {
    x: 0,
    y: 0,
    vx: 10,
    vy: 5,
    draw: drawEnemy,
    update: updateEnemy,
  } 
}

function drawEnemy() {
  console.log('drawEnemy')
}

function updateEnemy() {
  console.log('updateEnemy') 
}