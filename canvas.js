export const canvas = document.querySelector("#canvas1")
export const ctx = canvas.getContext('2d')

export function setCanvasSize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
