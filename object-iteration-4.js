var junker = new Car('Jalopy')

function Car (name) {
  Object.defineProperty(this, 'name', { value: name, enumerable: false })
}

Car.prototype.honk = function () {
  console.log('Aoogah aoogah!')
}

junker.mileage = 300000

console.log(Object.getOwnPropertyNames(junker))

var step = junker
while (step = Object.getPrototypeOf(step)) {
  console.log(Object.getOwnPropertyNames(step))
}

//[ 'name', 'mileage' ]
//[ 'constructor', 'honk' ]
//[ 'constructor',
//  'toString',
//  'toLocaleString',
//  'valueOf',
//  'hasOwnProperty',
//  'isPrototypeOf',
//  'propertyIsEnumerable',
//  '__defineGetter__',
//  '__lookupGetter__',
//  '__defineSetter__',
//  '__lookupSetter__',
//  '__proto__' ]

