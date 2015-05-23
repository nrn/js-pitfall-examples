fib(13000, console.log.bind(console))

function fib (n, cb) {
  return calcFib(0, 1, n, cb)
}

function calcFib (total, last, i, cb) {
  if (i === 0) return cb(total)
  setImmediate(function () { calcFib(total+last, total, i-1, cb) })
}

