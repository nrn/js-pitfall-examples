var type = 'sympathetic'
var acute = false
var exaggerated = true

var face =
  type === 'joking' ?
    acute ?
      exaggerated ? ';P' : ':p'
    : ';)'
  : type === 'sympathetic' ?
    acute ?
      exaggerated ? ':( :( :( :(' : ':('
    : exaggerated ? ':*(' : ':/'
  : ':)'

console.log(face) // :*(
