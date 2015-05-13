var nums = [1, 2, 3]

var total = nums.reduce(sum)

console.log(total) // 6

function sum (a, b) {
  console.log('Summing: ', a, b)
  return a + b
}
