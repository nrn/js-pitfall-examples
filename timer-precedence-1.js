var start = Date.now()

function recursiveNextTick () {
  process.nextTick(recursiveNextTick)
}

recursiveNextTick()

// Neither of these fire because we are
// busy nextTicking
setImmediate(check('setImmediate 1'))
setTimeout(check('setTimeout 1'), 0)

function check (name) {
  return function () {
    console.log(name + ' time: ' + process.hrtime())
  }
}

