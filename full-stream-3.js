var fs = require('fs')
var concat = require('concat-stream')

fs.createReadStream('./sample.txt')
  .on('error', function () {
    console.error('Oh, the humanity!')
  }).pipe(concat(function (res) {
    var noSpace = res.toString().replace(/\s/g, '')
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
