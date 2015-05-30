var fs = require('fs')
var streamCb = require('stream-cb')

fs.createReadStream('./sample.txt')
  .pipe(streamCb(function (err, res) {
    if (err) return console.error('Oh, the humanity!')
    var noSpace = res.replace(/\s/g, '')
    var len = noSpace.length
    var isPalendrome = true
    for (var i = 0; i < (len/2); i++) {
      if (noSpace[i] !== noSpace[len-1-i]) {
        isPalendrome = false
        break;
      }
    }
    console.log(isPalendrome, len)
}))

