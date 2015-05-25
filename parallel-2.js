var once = require('once')

var makeCb = afterParallel(function (err, res) {
  if (err) return console.error(err)
  console.log('Yay!', res)
})

;[ 'foo', 'bar', 'baz' ].forEach(function (name) {
  LOUD(name, makeCb())
})

function LOUD(name, cb) {
  setTimeout(function () {
    cb(null, name.toUpperCase())
  }, Math.random() * 1000)
}

function afterParallel (fn) {
  var cb = once(fn)
  var resArray = []
  var total = 0
  var called = 0

  return function makeDone () {
    if (called) {
      throw new Error('Added another parallel cb \
after results started comming back')
    }
    var position = total
    total += 1
    return function done (err, results) {
      if (err) return cb(err)
      resArray[position] = results
      called += 1
      if (total === called) cb(null, resArray)
    }
  }
}

