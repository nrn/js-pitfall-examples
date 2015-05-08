var fs = require('fs')
var https = require('https')
var streamCb = require('stream-cb')

https.get('https://github.com/nrn.keys',
    poolResponse(writeKeys(logSnark)))

function poolResponse (cb) {
  return function (resp) {
    resp.pipe(streamCb(cb))
  }
}

function writeKeys (cb) {
  return function (err, body) {
    if (err) return cb(err)
    fs.writeFile('./example-keys', body, cb)
  }
}

function logSnark (err) {
  // All errors in this series end up here.
  if (err) throw err
  console.log('are we there yet?')
}

