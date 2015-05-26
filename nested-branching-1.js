var type = 'sympathetic'
var acute = true
var exaggerated = true

var face = ''

if (type === 'joking') {
  if (acute) {
    if (exaggerated) {
      face = ';p'
    } else {
      face = ':p'
    }
  } else {
    face = ';)'
  }
} else if (type === 'sympathetic') {
  if (acute) {
    if (exaggerated) {
      face = ':( :( :( :('
    } else {
      face = ':('
    }
  } else {
    if (exaggerated) {
      face = ':*('
    } else {
      face = ':/'
    }
  }
} else {
  face = ':)'
}

console.log(face) //:( :( :( :(
