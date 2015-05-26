var type = 'sympathetic'
var acute = false
var exaggerated = false

// this is the crazy answer
// not the good answer.
var smileys =
  { joking:
    [ [ ';p', ':p' ]
    , [ ';)', ';)' ]
    ]
  , sympathetic:
    [ [ ':( :( :( :(', ':(' ]
    , [ ':*(', ':/' ]
    ]
  }

var face = type in smileys ? smileys[type][+!acute][+!exaggerated] : ':)'

console.log(face) // :/

