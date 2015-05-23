var a = { total: 0 };
a.inc = incTotal.bind(a)

otherThing(a.inc)

console.log(a.total) // 3

function incTotal () { this.total += 1 }

function otherThing (incFn) {
  incFn()
  incFn()
  incFn()
}

