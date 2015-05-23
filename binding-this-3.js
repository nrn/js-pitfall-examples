var a =
  { total: 0
  , inc: incTotal
  }

otherThing(a.inc)

console.log(a.total) // 3

function incTotal () { a.total += 1 }

function otherThing (incFn) {
  incFn()
  incFn()
  incFn()
}

