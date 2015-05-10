// WARNING: this doesn't work.
function sum () {
  return arguments.reduce(function (a, b) { return a + b })
}

console.log(sum(1, 2, 3))
// KABOOM
