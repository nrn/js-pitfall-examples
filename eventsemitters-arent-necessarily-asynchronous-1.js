var EE = require('events').EventEmitter
var ee = new EE()

ee.on('yolo', function (a) {
  // WARNING: If a doesn't exit, this will throw an error.
  console.log(a.b)
})

ee.emit('yolo') // Oh no...

console.log('Is it safe?') // We don't even get here.

