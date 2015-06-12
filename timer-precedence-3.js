var wait = 10
var start = Date.now()

setImmediate(check('setImmediate 1'))
setTimeout(check('setTimeout 1'), 0)
setImmediate(check('setImmediate 2'))
setImmediate(check('setImmediate 3'))
setTimeout(check('setTimeout 2'), 0)
setTimeout(check('setTimeout 3'), 0)

while(true) {
  if (Date.now() - start > wait) break
}

function check (name) {
  return function () {
    console.log(name + ' time: ' + process.hrtime())
  }
}

