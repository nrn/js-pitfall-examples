// ------- User Code ----------
var options = { type: 'dog' }

var Spot = new buildPet(options)
console.dir(Spot)

var Fido = new buildPet(options)
console.dir(Fido)

// ------- Our Third Party Module ----------

function buildPet (options) {
  var color = [ 'black', 'white', 'brownn' ]
  if (!options) options = {}
  if (!options.color) {
    options.color = color[Math.floor(Math.random() * 3)]
  }

  for (var i in options) {
    this[i] = options[i]
  }
}
