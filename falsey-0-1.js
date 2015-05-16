var nodes =
  [ { id: 0, val: 'a' }
  , { id: 1, val: 'b' }
  , { foo: 20 }
  , { id: 2, val: 'c' }
  ]

// Broken!
nodes.forEach(function (node) {
  if (node.id) {
    console.log(node.val)
  }
})
