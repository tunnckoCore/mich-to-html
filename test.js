/*!
 * mich-to-html <https://github.com/tunnckoCore/mich-to-html>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

// const test = require('mukla')
const toHtml = require('./index')
const h = require('mich-h')

// test('mich-to-html', (done) => {
//   michToHtml()
//   done()
// })

var ast = h('div#page.foo.bar.qux', { className: 'ok fool' },
  h('#header', // if tag name is not given, defaults to `div`
    h('h1.classy', null, { style: 'background-color: #333; color: purple' })),
  h('nav#menu', { style: {'background': '#2f2', 'font-size': '12px' } },
    h('ul', [
      h('li', 'one', { dataset: { foo: 'bar', set: 'ok' } }),
      h('li.sec', 'two', { className: ['huh'] }),
      h('li', 'three', { visible: false })
    ])),
  h('h2#title', 'content title',  { style: {'background-color': 'red'} }),
  h('p.first', // classes of that `p` would be `first, foobie`
    { className: 'foobie' },
    "so it's just like a templating engine, ",
    "but easy to use inline with javascript",
    { onclick: () => {} }
  ),
  h('p',
    { className: 'lastParagraph' },
    "the intention is for this to be used to create ",
    h('strong', 'charlike', {
      className: ['bold'],
      style: 'background: white; color: green'
    }),
    " reusable, interactive html widgets."))

toHtml(ast)
// console.log(toHtml(ast))

/**
 * Example Components
 */

var Foo = function (props) {
  return h('user', { name: props.name }, props.children.map(function (child) {
    child.properties.last = props.last
    return child
  }))
}
var foo = h(Foo, {
  name: 'Charlike',
  last: 'Reagent'
}, h('strong', { visible: true }, 'hello'))

toHtml(foo)
// console.log(toHtml(foo))
