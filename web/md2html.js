const fg = require('fast-glob')
const fs = require('fs')
const showdown = require('showdown')

const args = process.argv;

const converter = new showdown.Converter()

fg.sync(args[2]).forEach(path => {
  console.log(`Converting ${path} to HTML...`)

  const text = fs.readFileSync(path, 'utf8')
  const html = converter.makeHtml(text)

  const file = path.replace(/\.\w+$/, '.html')

  fs.writeFileSync(file, html)
})
