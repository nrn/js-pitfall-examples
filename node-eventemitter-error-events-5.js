var http = require('http')
var fs = require('fs')

http.get('http://nrn.io', function (res) {
  res.pipe(fs.createWriteStream('./na/foo')
  ).on('error', function (e) { console.error(e) })
}).on('error', function (e) { console.error(e) })

