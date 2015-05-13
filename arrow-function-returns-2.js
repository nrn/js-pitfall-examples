var nums = [1, 2, 3]

var total = nums.reduce((a, b) => {
  console.log('Summing: ', a, b)
  a + b
})

console.log(total) 
