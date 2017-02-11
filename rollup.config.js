const zopfli = require('rollup-plugin-zopfli')
const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

module.exports = {
  entry: 'index.js',
  moduleName: 'michToHtml',
  sourceMap: true,
  useStrict: false,
  plugins: [
    commonjs(),
    resolve(),
    uglify({ compress: { warnings: false } }),
    zopfli({ options: { numiterations: 1000 } })
  ],
  targets: [
    { dest: 'dist/mich-to-html.min.js', format: 'umd' }
  ]
}
