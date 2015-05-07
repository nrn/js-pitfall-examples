var EE = require('events').EventEmitter
var ee = new EE()

enterLottery(ee)

ee.on('winner', function (amount) {
  // Could have had all this.
  while (amount--) {
    console.log('Omg omg omg we win!')
  }
  // But we weren't listening in tme.
  // We never knew we won.
})

function enterLottery (emitter) {
  ee.emit('winner', 1000000000)
}

