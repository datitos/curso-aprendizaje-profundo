const fs = require('fs');
const yaml = require('js-yaml');

const args = process.argv;

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

for (const row of doc.body) {
  if (row.class) {
    out.push(`    <tr class="${row.class}">`)
  } else {
    out.push('    <tr>')
  }

  for (const col in doc.header) {
    const cell = row[col]?.trim().replace(/\n/g,'<br>')

    out.push('      <td>')
    cell && out.push(`        ${cell}`)
    out.push('      </td>')
  }

  out.push('    </tr>')
}

out.push('  </tbody>')
out.push('</table>')

fs.writeFileSync(args[3], out.join('\n'))
