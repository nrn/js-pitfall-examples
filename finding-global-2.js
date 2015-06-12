(function () {
  var win = this
  win.foo = 'bar'
})()

console.log(global.foo) // bar
console.log(exports.foo) // undefined