# cosine-similarity

Cosine similarity between two object vectors.

[![Build Status](https://travis-ci.org/cshum/cosine-similarity.svg)](https://travis-ci.org/cshum/cosine-similarity)

```
npm install cosine-similarity
```

### similarity(a, b)

```js
var similarity = require('cosine-similarity')

console.log(similarity(
  {x: 1, y: 3, z: -5, foo: 0},
  {x: 4, y: -2, z: -1}
).toFixed(3)) // 0.111

console.log(similarity(
  {x: 1, y: 3, z: -5},
  {x: 0, y: 0, z: 0}
)) // false

```

## License

MIT

