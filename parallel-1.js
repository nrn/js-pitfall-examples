var resArray = []

//broken
;[ 'foo', 'bar', 'baz' ].forEach(function (name, i) {
  LOUD(name, function done (err, results) {
    if (err) throw err
    resArray[i] = results
  })
})

console.log('Yay!', resArray) // boo, empty array :(

function LOUD(name, cb) {
  setTimeout(function () {
    cb(null, name.toUpperCase())
  }, Math.random() * 1000)
}

