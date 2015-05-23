var a =
  { total: 0
  , inc: function () { this.total += 1 }
  };

// broken
otherThing(a.inc)

console.log(a.total) // 0

console.log(total) // NaN

function otherThing (incFn) {
  incFn()
  incFn()
  incFn()
}

