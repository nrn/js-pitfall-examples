var start = Date.now()

setTimeout(function () {
  var next = Date.now()
  console.log(next - start)
  setTimeout(function () {
    var last = Date.now()
    console.log(last - next)
  }, 0)
}, 0)

