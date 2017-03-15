# Flip a coin
Instant Node.js coin toss. Heads or tails? Just flip a coin.


## Global install

    $ npm install -g flipacoin

### Usage 

    $ flip
    > head

## Embedded

```javascript
var flip = require('flipacoin')

flip()
// 'head' or 'tail'

flip('num')
// 1 or 0

flip('bool')
// true or false
```

