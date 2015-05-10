var slice = Array.prototype.slice

function sum () {
  return slice.call(arguments).reduce(
    function (a, b) { return a + b }
  )
}

console.log(sum(1, 2, 3))
// 6

