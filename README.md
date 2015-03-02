closure-library.ts [![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url]
====

> A bridge to use Closure Library with TypeScript

This is all-in-one package to use Closure Library from TypeScript including:

* Latest Closure Library ([patched for TypeScript](https://github.com/teppeis/closure-library/tree/fix))
* TypeScript type declaration files for Closure Library ([closure-library.d.ts](https://github.com/teppeis/closure-library.d.ts))
* Bridge for zero config usage

## Usage

```console
$ npm i closure-library.ts
$ vi foo.ts
```

```typescript
// Import index.ts
import closure = require('./node_modules/closure-library.ts/index');
// Call register() method
closure.register();
// then `googl.require` returns the namespace!
var Queue = goog.require('goog.structs.Queue');
var q = new Queue<number>();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
var n: number = q.dequeue(); // 10
```

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/closure-library.ts.svg
[npm-url]: https://npmjs.org/package/closure-library.ts
[travis-image]: https://travis-ci.org/teppeis/closure-library.ts.svg?branch=master
[travis-url]: https://travis-ci.org/teppeis/closure-library.ts
[deps-image]: https://david-dm.org/teppeis/closure-library.ts.svg
[deps-url]: https://david-dm.org/teppeis/closure-library.ts
