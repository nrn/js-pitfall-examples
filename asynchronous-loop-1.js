var count = 0
var render = function () {
  document.body.innerHTML = count++
  window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)