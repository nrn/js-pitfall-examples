setTimeout(function () {
  increment()
  increment()
  increment()
  log() // 3
}, 0)

// UTILITY CODE BELOW

var count = 0
function increment () {
  count += 1
}

function log () {
  console.log(count)
}
