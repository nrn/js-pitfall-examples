var fs = require('fs')

var buffer = ''
fs.createReadStream('./sample.txt')
  .on('data', function (chunk) {
    buffer += chunk
  }).on('end', function () {
    var noSpace = buffer.replace(/\s/g, '')
    var len = noSpace.length
    var isPalendrome = true
    for (var i = 0; i < (len/2); i++) {
      if (noSpace[i] !== noSpace[len-1-i]) {
        isPalendrome = false
        break;
      }
    }
    console.log(isPalendrome, len)
  }).on('error', function () {
    console.error('Oh, the humanity!')
  })
