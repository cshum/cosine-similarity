'use strict'

var benchmark = require('benchmark')

var similarity = require('.')

var smallIntA = {a: 1, b: 2, c: -1}
var smallIntB = {a: 4, b: -2, c: -1}

var largeIntA = {}
var largeIntB = {}
var keys = 'abcdefghijklmnopqrstuvw'
for (var i = 0; i < keys.length; i++) {
	var key = keys[i]
	largeIntA[key] = Math.round((Math.random() - .5) * 10)
	largeIntB[key] = Math.round((Math.random() - .5) * 10)
}

new benchmark.Suite()

.add('small integer vectors', function () {
	similarity(smallIntA, smallIntB)
})
.add('large integer vectors', function () {
	similarity(largeIntA, largeIntB)
})

.on('cycle', (e) => {
	console.log(e.target.toString())
})
.run()
