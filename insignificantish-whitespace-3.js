console.log(
  get('foo')({foo: 'bar'})
)

function get (property) {
  return function getter (obj) {
      return obj[property]
    }
}
