var face = getFace('joking', true, true)

console.log(face) // ;P

function getFace (type, acute, exaggerated) {
  if (type === 'joking') {
    if (acute) return exaggerated ? ';P' : ':p'
    return ';)'
  }

  if (type === 'sympathetic') {
    if (acute) return exaggerated ? ':( :( :( :(' : ':('
    return  exaggerated ? ':*(' : ':/'
  }

  return ':)'
}

