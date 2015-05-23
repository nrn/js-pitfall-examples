a = 10

console.log(
  bar('a + 2')
)

function bar (txt) {
  var a = 1;
  return new Function('return ' + txt)()
}

