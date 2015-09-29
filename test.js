var test = require('tape')
var similarity = require('./')

test('similarity', function (t) {
  t.equal(similarity(
    {x: 1, y: 3, z: -5, foo: 0},
    {x: 4, y: -2, z: -1}
  ).toFixed(3), 0.111.toString(), 'cosine similarity')

  t.equal(similarity(
    {x: 1, y: 3, z: -5},
    {x: 0, y: 0, z: 0}
  ), false, 'zero magitude vector')

  t.end()
})
