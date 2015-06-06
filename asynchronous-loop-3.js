var request = require('request')
var start = Date.now()
var url = 'http://wiki.nrn.io/welcome-visitors.json'

request(url,
  function poll (err, res, body) {
    var journal = JSON.parse(body).journal
    if (journal[journal.length-1].date > start) {
      console.log('New Version!')
      return
    }

    //if nothing has changed, ask again
    request(url, poll)
  }
)

