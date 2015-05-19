var a =
  { foo: 'bar'
  , toString: function () {
      return this.foo
    }
  }

console.log(a == 'bar') // true

