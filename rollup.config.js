const zopfli = require('rollup-plugin-zopfli')
const uglify = require('rollup-plugin-uglify')

module.exports = {
  entry: 'index.js',
  moduleName: 'michToHtml',
  sourceMap: true,
  useStrict: false,
  plugins: [
    uglify({ compress: { warnings: false } }),
    zopfli({ options: { numiterations: 1000 } })
  ],
  targets: [
    { dest: 'dist/mich-to-html.min.js', format: 'umd' }
  ]
}
