var fs = require('fs')
var https = require('https')
var streamCb = require('stream-cb')

https.get('https://github.com/nrn.keys', function (response) {
    response.pipe(streamCb(function (e, body) {
      if (e) throw e
      fs.writeFile('./example-keys', body, function (aargh) {
        if (aargh) throw aargh
        console.log('are we there yet?')
      })
    }))
})

