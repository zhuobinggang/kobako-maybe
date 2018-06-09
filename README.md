# Maybe

Yet another Maybe type written by vanilla.js

Inspired by Haskell's Maybe type

Can be used in browser,node and requireJs

## Installation

On browser or requireJs, just copy the `src/maybe.js` to desired path then use like this

```html
<script src="/yourpath/maybe.js"></script>
<script>
  // Lib export 'M' to global
  console.log(M.or(M.just('Hello kobako-maybe'),'Oh no'))
</script>
```

By npm

```
$ npm install kobako-maybe
```

## Usage

Import the lib:

```js
const M = require('kobako-maybe')
```

Use the `just` of `nothing` function to create a `Maybe` type from a value

```js
const value = M.just(1)

M.isJust(value) //true
M.isNothing(value) //false

const val2 = M.nothing()

M.isJust(val2) //false
M.isNothing(val2) //true
```

Use `map` to lift a function: you can use a traditional function on a Maybe value

```js
const value = M.just(1)
const nothing = M.nothing()

M.map(x => x+1, value) //Just 2
M.map(x => x+1, nothing) //Nothing
```

Use `or` to unwrap value from Maybe

```js
M.or(M.just(1),-1) //1
M.or(M.nothing(),-1) //-1
```