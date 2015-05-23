// broken
console.log(
  fib(13974) // throws RangeError
)

function fib (n) {
  return calcFib(0, 1, n)
}

function calcFib (total, last, i) {
  if (i === 0) return total
  return calcFib(total+last, total, i-1)
}

