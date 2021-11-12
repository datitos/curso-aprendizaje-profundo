const fs = require('fs');
const yaml = require('js-yaml');

const args = process.argv;

const targetDir = args[3] ?? '.'

if (!fs.existsSync(targetDir)){
  fs.mkdirSync(targetDir)
}

const file = fs.readFileSync(args[2], 'utf8')
const doc = yaml.load(file)

const out = []

out.push('<table>')
out.push('  <thead>')
out.push('    <tr>')

for (const col in doc.header) {
  out.push('      <th>')
  out.push(`        ${doc.header[col]}`)
  out.push('      </th>')
}

out.push('    </tr>')
out.push('  </thead>')
out.push('  <tbody>')

function parseDate(input) {
  const months = [
    'enero', 'febrero', 'marzo',
    'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre',
    'octubre', 'noviembre', 'diciembre'
  ]

  const aux = input.split(' ')

  const day = parseInt(aux[1])
  const month = months.indexOf(aux[3])
  const year = new Date().getFullYear()

  if (month === -1) {
    throw `Could not parse date for {string}.`
  }

  return new Date(year, month, day)
}

function orderByDate(a, b) {
  return parseDate(a.fecha) - parseDate(b.fecha)
}

for (const row of doc.body.sort(orderByDate)) {
  if (row.class) {
    out.push(`    <tr class="${row.class}">`)
  } else {
    out.push('    <tr>')
  }

  for (const col in doc.header) {
    const cell = row[col]?.trim()

    out.push('      <td>')
    cell && out.push(`        ${cell}`)
    out.push('      </td>')
  }

  out.push('    </tr>')
}

out.push('  </tbody>')
out.push('</table>')

const filename = args[2].replace(/\.\w+$/, '.html')

fs.writeFileSync(`${targetDir}/${filename}`, out.join('\n'))
