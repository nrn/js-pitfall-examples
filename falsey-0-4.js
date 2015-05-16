var nodes =
  [ { id: 0, val: 'a' }
  , { id: 1, val: 'b' }
  , { foo: 20 }
  , { id: null, val: 'c' }
  ]

nodes.forEach(function (node) {
  if (typeof node.id !== 'undefined' && node.id !== null) {
    console.log(node.val)
  }
})
