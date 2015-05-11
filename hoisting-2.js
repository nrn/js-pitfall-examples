// WARNING: Hoisting bug.
increment()
increment()
increment()
log() // NaN

// UTILITY CODE BELOW

var count = 0

log() // 0

function increment () {
  count += 1
}

function log () {
  console.log(count)
}
