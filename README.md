# fs-logger
Appends text to a file. Simple. 0 dependencies.

Based of `fs`.

# Requirements
- [Node.js](http://nodejs.org) >v10

# Installation
Just run `npm i fs-logger` in console.

# Usage
First import the module:
```javascript
const log = require('fs-logger');
````
`log()`
```javascript
(async function(){
    await log('log.txt', 'hello world');
    console.log('done!');
})();
```
log.txt:
```
hello world

```
`log.sync()`
```javascript
log.sync('log.txt', 'hello world');
console.log('done!');
```
log.txt:
```
hello world
hello world

```