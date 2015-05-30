var manyTypes =
  [ null
  , true
  , 1000
  , '999aaa'
  , '1234'
  , new Date()
  ]

var conversions = manyTypes.map(function (a) {
  return (
    [ +a
    , Number(a)
    , parseFloat(a)
    , a ? a.valueOf() : 'N/A'
    ]
  )
})

console.log(conversions)

