var junker = new Car('Jalopy')

function Car (name) {
  Object.defineProperty(this, 'name', { value: name, enumerable: false })
}

Car.prototype.honk = function () {
  console.log('Aoogah aoogah!')
}

junker.milage = 300000

(Object.keys(junker)) // [ 'milage' ]
