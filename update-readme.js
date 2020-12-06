const fs = require('fs')
const axios = require('axios')
const createTable = require('markdown-table')
const dayNr = parseInt(process.argv[2])

axios(`https://adventofcode.com/2020/day/${dayNr}`).then(res => {
  const title = res.data.match(/--- Day \d*: (.*) ---/)[1]
  fs.appendFileSync('./puzzle-names.txt', `${title}\n`)

  const data = fs
    .readFileSync('./puzzle-names.txt')
    .toString()
    .split('\n')
    .slice(0, -1)
    .map(line => line.split('|'))

  const table = createTable(
    [
      ['Day', 'Quest', 'Part 1', 'Part 2'],
      ...data.map((title, index) => [
        index + 1,
        `[${title}][${index + 1}]`,
        ':star:',
        ':star:'
      ]),
      [dayNr + 1, 'Coming soon...']
    ],
    { align: ['c', 'c', 'c', 'c'] }
  )

  console.log(table)

  const links = []
  for (let i = 1; i <= dayNr; i++) {
    links.push(`[${i}]: https://adventofcode.com/2020/day/${i}`)
  }

  fs.writeFileSync(
    './README.md',
    `# Advent of Code
Solutions for [Advent of Code 2020](https://adventofcode.com/2020/) in TypeScript

## Stars
${table}


## How to run?
Install dependencies:
\`\`\`shell
npm ci
\`\`\`

Run solution by day and part number:
\`\`\`shell
npm run start <day-nr> <part-nr>
\`\`\`

${links.join('\n')}
`
  )
})
