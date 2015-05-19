var a =
  { foo: 'bar'
  , toString: function () {
      return this.foo
    }
  , valueOf: function () {
      return 10
    }
  }

console.log(a == 'bar') // false???

console.log(a > 9) // true

console.log(a < 11) // true

console.log(''+a) // 10, Ohhh

