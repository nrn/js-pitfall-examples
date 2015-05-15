// Module b
var a = require('./circular-a-1')

module.exports = a + 1 

console.log(module.exports)
