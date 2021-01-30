const fg = require('fast-glob')
const fs = require('fs')
const Mustache = require('mustache')

const args = process.argv

const partials = {}

fg.sync(args[2]).forEach(path =>
  partials[path.replace(/\.\w+$/, '')] = fs.readFileSync(path, 'utf8')
)

const layout = fs.readFileSync(args[3], 'utf8')

const render = Mustache.render(layout, {}, partials)

const targetDir = args[4].split('/').slice(0,-1).join('/')

if (!fs.existsSync(targetDir)){
  fs.mkdirSync(targetDir)
}

fs.writeFileSync(args[4], render)
