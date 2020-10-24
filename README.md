# fs-logger

[![NPM version](https://img.shields.io/npm/v/fs-logger.js.svg?style=flat)][npm-url]
[![node-current](https://img.shields.io/node/v/fs-logger.js)](https://nodejs.org)
[![NPM downloads](https://img.shields.io/npm/dm/fs-logger.js.svg?style=flat)](https://npmcharts.com/compare/fs-logger.js?minimal=true)
[![npm bundle size](https://img.shields.io/bundlephobia/min/fs-logger.js?label=download%20size)][npm-url]
[![install size](https://packagephobia.com/badge?p=fs-logger.js)][npm-url]

Appends text to a file. Simple. 0 dependencies.

Based of `fs`.

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

[npm-url]: https://npmjs.org/package/fs-logger.js