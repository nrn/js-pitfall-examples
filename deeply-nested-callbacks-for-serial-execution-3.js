var fs = require('fs')
var https = require('https')
var streamCb = require('stream-cb')

https.get('https://github.com/nrn.keys', function (stream) {
    // kicking this off is weird since https.get
    // doesn't follow the (err, result) pattern.
    serial(
      [ poolResponse
      , writeKeys
      ], logSnark
    )(null, stream)
  }
)

function poolResponse (done, resp) {
  resp.pipe(streamCb(done))
}

function writeKeys (done, body) {
  fs.writeFile('./example-keys', body, done)
}

function logSnark (err) {
  // All errors in this series end up here.
  if (err) throw err
  console.log('are we there yet?')
}

function serial (steps, end) {
  return steps.reduceRight(wrapStep, end)
}

function wrapStep (nextStep, thisStep) {
  return function (err, res) {
    if (err) return nextStep(err)
    thisStep(nextStep, res)
  }
}

