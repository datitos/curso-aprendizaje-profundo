const fg = require('fast-glob')
const fs = require('fs')
const Mustache = require('mustache')

const args = process.argv;

const partials = {}

fg.sync(args[2], { ignore: args[4] }).forEach(path =>
  partials[path.replace(/\.\w+$/, '')] = fs.readFileSync(path, 'utf8')
)

const layout = fs.readFileSync(args[3], 'utf8')

const render = Mustache.render(layout, {}, partials)

fs.writeFileSync(args[4], render)
