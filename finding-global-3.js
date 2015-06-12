// broken
(function () {
  "use strict";
    (function () {
      var win = this
      win.foo = 'bar'
//TypeError: Cannot set property 'foo' of undefined
    })()
})()

console.log(global.foo) // we never
console.log(exports.foo) // get here