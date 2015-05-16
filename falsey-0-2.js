var nodes =
  [ { id: 0, val: 'a' }
  , { id: 1, val: 'b' }
  , { foo: 20 }
  , { id: 2, val: 'c' }
  ]

nodes.forEach(function (node) {
  if ('id' in node) {
    console.log(node.val)
  }
})
