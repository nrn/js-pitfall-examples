var nodes =
  [ { id: 0, val: 'a' }
  , { id: 1, val: 'b' }
  , { foo: 20 }
  , { id: null, val: 'c' }
  ]

nodes.forEach(function (node) {
  if (node.id != null) { // tricky
    console.log(node.val)
  }
})
