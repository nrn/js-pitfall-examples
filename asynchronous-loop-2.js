var request = require('request')
var content = ''

var useContent = function () {
  if (content) {
    console.log(content)
  } else {
    setTimeout(useContent, 10)
  }
}

useContent()

request('http://nrn.io/javascript-common-pitfalls.html',
  function (err, res, body) {
    content = body
  }
)
