const fg = require('fast-glob')
const fs = require('fs')
const showdown = require('showdown')

const args = process.argv

const targetDir = args[3] ?? '.'

if (!fs.existsSync(targetDir)){
  fs.mkdirSync(targetDir)
}

const converter = new showdown.Converter({ headerLevelStart: 2 })

fg.sync(args[2]).forEach(path => {
  console.log(`Converting ${path} to HTML...`)

  const text = fs.readFileSync(path, 'utf8')
  const html = converter.makeHtml(text)

  const filename = path.replace(/\.\w+$/, '.html')

  fs.writeFileSync(`${targetDir}/${filename}`, html)
})
