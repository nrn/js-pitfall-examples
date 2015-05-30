var manyTypes =
  [ undefined
  , null
  , 1
  , 'Foo'
  , {a:'b'}
  , ['c', 'd']
  , /a/
  , function () {}
  , new Date()
  ]

var conversions = manyTypes.map(function (a) {
  return (
    [ ''+a
    , String(a)
    , a ? a.toString() : 'N/A'
    , JSON.stringify(a)
    ]
  )
})

console.log(conversions)
