(function (win) {
  win.foo = 'bar'
})(this)

console.log(global.foo) // undefined
console.log(exports.foo) // bar