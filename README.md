# mich-to-html [![NPM version](https://img.shields.io/npm/v/mich-to-html.svg?style=flat)](https://www.npmjs.com/package/mich-to-html) [![NPM monthly downloads](https://img.shields.io/npm/dm/mich-to-html.svg?style=flat)](https://npmjs.org/package/mich-to-html) [![npm total downloads][downloads-img]][downloads-url]

> Tiny and naive implementation of rendering HAST-compliant virtual dom trees to HTML string, just in ~420 bytes.

[![codeclimate][codeclimate-img]][codeclimate-url] 
[![codestyle][standard-img]][standard-url] 
[![linux build][travis-img]][travis-url] 
[![windows build][appveyor-img]][appveyor-url] 
[![codecov][coverage-img]][coverage-url] 
[![dependency status][david-img]][david-url]

_You might also be interested in [mich-h][] - virtual dom builder in just ~500 bytes, compatible with [hyperscript][]._

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Related](#related)
- [Contributing](#contributing)
- [Building docs](#building-docs)
- [Running tests](#running-tests)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install
Install with [npm](https://www.npmjs.com/)

```
$ npm install mich-to-html --save
```

or install using [yarn](https://yarnpkg.com)

```
$ yarn add mich-to-html
```

## Usage
> For more use-cases see the [tests](test.js)

```js
const h = require('mich-h')
const toHtml = require('mich-to-html')

const tree = h('h1.big#hero.header', 'Hello World')

const html = toHtml(tree)
console.log(html)
// => '<h1 id="hero" class="big header">Hello World</h1>'
```

Or, using the JSX syntax and adding the [JSX Pragma](https://jasonformat.com/wtf-is-jsx/) somewhere at the top

```jsx
/** @jsx h */
const h = require('mich-h')
const toHtml = require('mich-to-html')

const hi = 'Hello World'
const tree = <h1 id="hero" className="big header">{hi}</h1>

console.log(toHtml(tree))
// => '<h1 id="hero" class="big header">Hello World</h1>'
```

## API

TODO

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [gibon](https://www.npmjs.com/package/gibon): Functional client-side router in ~570 bytes, built on HTML5 History API | [homepage](https://github.com/tunnckocore/gibon#readme "Functional client-side router in ~570 bytes, built on HTML5 History API")
- [hastscript](https://www.npmjs.com/package/hastscript): Hyperscript compatible DSL for creating virtual HAST trees | [homepage](https://github.com/wooorm/hastscript#readme "Hyperscript compatible DSL for creating virtual HAST trees")
- [hyperapp](https://www.npmjs.com/package/hyperapp): 1kb JavaScript library for building modern UI applications | [homepage](https://github.com/hyperapp/hyperapp#readme "1kb JavaScript library for building modern UI applications")
- [hyperscript](https://www.npmjs.com/package/hyperscript): Create HyperText with JavaScript, on client or server. | [homepage](https://github.com/dominictarr/hyperscript "Create HyperText with JavaScript, on client or server.")
- [mich-h](https://www.npmjs.com/package/mich-h): Create HAST-compliant virtual trees of HTML using [hyperscript][] compatible syntax, just in ~550 bytes. | [homepage](https://github.com/tunnckocore/mich-h#readme "Create HAST-compliant virtual trees of HTML using [hyperscript][] compatible syntax, just in ~550 bytes.")
- [mich-parse-selector](https://www.npmjs.com/package/mich-parse-selector): Tiny parser for simple CSS selectors, just in ~300 bytes.  Pretty similar to what is done in [hyperscript][] | [homepage](https://github.com/tunnckocore/mich-parse-selector#readme "Tiny parser for simple CSS selectors, just in ~300 bytes.  Pretty similar to what is done in [hyperscript][]")
- [minibase](https://www.npmjs.com/package/minibase): Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/mich-to-html/issues/new).  
Please read the [contributing guidelines](CONTRIBUTING.md) for advice on opening issues, pull requests, and coding standards.  
If you need some help and can spent some cash, feel free to [contact me at CodeMentor.io](https://www.codementor.io/tunnckocore?utm_source=github&utm_medium=button&utm_term=tunnckocore&utm_campaign=github) too.

**In short:** If you want to contribute to that project, please follow these things

1. Please DO NOT edit [README.md](README.md), [CHANGELOG.md](CHANGELOG.md) and [.verb.md](.verb.md) files. See ["Building docs"](#building-docs) section.
2. Ensure anything is okey by installing the dependencies and run the tests. See ["Running tests"](#running-tests) section.
3. Always use `npm run commit` to commit changes instead of `git commit`, because it is interactive and user-friendly. It uses [commitizen][] behind the scenes, which follows Conventional Changelog idealogy.
4. Do NOT bump the version in package.json. For that we use `npm run release`, which is [standard-version][] and follows Conventional Changelog idealogy.

Thanks a lot! :)

## Building docs
Documentation and that readme is generated using [verb-generate-readme][], which is a [verb][] generator, so you need to install both of them and then run `verb` command like that

```
$ npm install verbose/verb#dev verb-generate-readme --global && verb
```

_Please don't edit the README directly. Any changes to the readme must be made in [.verb.md](.verb.md)._

## Running tests
Clone repository and run the following in that cloned directory

```
$ npm install && npm test
```

## Author
**Charlike Mike Reagent**

+ [github/tunnckoCore](https://github.com/tunnckoCore)
+ [twitter/tunnckoCore](https://twitter.com/tunnckoCore)
+ [codementor/tunnckoCore](https://codementor.io/tunnckoCore)

## License
Copyright © 2016-2017, [Charlike Mike Reagent](https://i.am.charlike.online). Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.1, on February 11, 2017._  
_Project scaffolded using [charlike][] cli._

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[charlike]: https://github.com/tunnckocore/charlike
[commitizen]: https://github.com/commitizen/cz-cli
[dezalgo]: https://github.com/npm/dezalgo
[hyperscript]: https://github.com/dominictarr/hyperscript
[mich-h]: https://github.com/tunnckocore/mich-h
[once]: https://github.com/isaacs/once
[standard-version]: https://github.com/conventional-changelog/standard-version
[verb-generate-readme]: https://github.com/verbose/verb-generate-readme
[verb]: https://github.com/verbose/verb

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[charlike]: https://github.com/tunnckocore/charlike
[commitizen]: https://github.com/commitizen/cz-cli
[dezalgo]: https://github.com/npm/dezalgo
[hyperscript]: https://github.com/dominictarr/hyperscript
[mich-h]: https://github.com/tunnckocore/mich-h
[once]: https://github.com/isaacs/once
[standard-version]: https://github.com/conventional-changelog/standard-version
[verb-generate-readme]: https://github.com/verbose/verb-generate-readme
[verb]: https://github.com/verbose/verb

[downloads-url]: https://www.npmjs.com/package/mich-to-html
[downloads-img]: https://img.shields.io/npm/dt/mich-to-html.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/mich-to-html
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/mich-to-html.svg

[travis-url]: https://travis-ci.org/tunnckoCore/mich-to-html
[travis-img]: https://img.shields.io/travis/tunnckoCore/mich-to-html/master.svg?label=linux

[appveyor-url]: https://ci.appveyor.com/project/tunnckoCore/mich-to-html
[appveyor-img]: https://img.shields.io/appveyor/ci/tunnckoCore/mich-to-html/master.svg?label=windows

[coverage-url]: https://codecov.io/gh/tunnckoCore/mich-to-html
[coverage-img]: https://img.shields.io/codecov/c/github/tunnckoCore/mich-to-html/master.svg

[david-url]: https://david-dm.org/tunnckoCore/mich-to-html
[david-img]: https://img.shields.io/david/tunnckoCore/mich-to-html.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

