/*!
 * mich-to-html <https://github.com/tunnckoCore/mich-to-html>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var transform = {
  'className': 'class',
  'htmlFor': 'for',
  'httpEquiv': 'http-equiv'
}

module.exports = function michToHtml (ast) {
  var buf = ''
  traverse([].concat(ast), function (node) {
    if (node && node.type === 'text') {
      buf += node.value
    }
    if (node && node.type === 'element') {
      buf += '<' + node.tagName + toAttrs(node.properties) + '>'
      buf += michToHtml(node.children) + '</' + node.tagName + '>'
    }
  })

  return buf
}

function traverse (ast, cb) {
  ast && ast.map(function (node) {
    traverse(cb(node), cb)
  })
  return ast
}

function toAttrs (props) {
  var attr = ''

  for (var prop in props) {
    var value = props[prop]
    prop = prop in transform ? transform[prop] : prop
    value = prop === 'class' ? value.join(' ') : value
    var type = typeof value

    if (value === true) {
      attr += ' ' + prop
    } else if (value === false) {
      attr += ' ' + prop + '="false"'
    } else if (type === 'string' || type === 'number') {
      attr += ' ' + prop + '="' + value + '"'
    } else if (prop === 'style') {
      var css = ''
      for (var key in value) {
        css += key + ': ' + value[key] + ';'
      }
      attr += ' ' + prop + '="' + css + '"'
    } else if (prop === 'dataset') {
      for (var k in value) {
        attr += ' data-' + k + '="' + value[k] + '"'
      }
    }
  }

  return attr
}
