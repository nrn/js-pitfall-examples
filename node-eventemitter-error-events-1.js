var http = require('http')
var fs = require('fs')

http.get('http://nrn.io:2222', function (res) {
    res.pipe(fs.createWriteStream('./na/foo'))
})

