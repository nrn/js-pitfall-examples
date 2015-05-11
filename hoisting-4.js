// It may not be clear why this
// variable is here, but it's
// worth needing to look for it.
var count = 0

increment()
increment()
increment()
log() // 3

// UTILITY CODE BELOW

function increment () {
  count += 1
}

function log () {
  console.log(count)
}
