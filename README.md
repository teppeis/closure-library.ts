closure-library.ts [![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url]
====

> Closure Library for TypeScript

This is all-in-one package to use Closure Library with TypeScript including:

* Latest Closure Library ([patched for TypeScript](https://github.com/teppeis/closure-library/tree/fix))
* Type declaration files (d.ts) of Closure Library ([closure-library.d.ts](https://github.com/teppeis/closure-library.d.ts))
* Bridge utility for zero config usage

## Install

```console
$ npm install closure-library.ts
```

## Usage

```typescript
// Import index.ts to load type information of Closure Library.
import closure = require('./node_modules/closure-library.ts/index');
// Call register() to enable `goog.requrie()`.
closure.register();
// Then `googl.require` returns the namespace!
var Queue = goog.require('goog.structs.Queue');
// Type information of Closure Library is available in TypeScript.
var q = new Queue<number>();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
var n: number = q.dequeue(); // n = 10, ok!
var s: string = q.dequeue(); // Error! "Type 'number' is not assignable to type 'string'."
```

Once closure-library.ts is registered in the top of your bootstrap file, you don't have to `register()` in each dependent file.

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/closure-library.ts.svg
[npm-url]: https://npmjs.org/package/closure-library.ts
[travis-image]: https://travis-ci.org/teppeis/closure-library.ts.svg?branch=master
[travis-url]: https://travis-ci.org/teppeis/closure-library.ts
[deps-image]: https://david-dm.org/teppeis/closure-library.ts.svg
[deps-url]: https://david-dm.org/teppeis/closure-library.ts
