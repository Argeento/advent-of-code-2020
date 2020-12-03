const path = require('path')
const dayNr = process.argv[2] || '1'
const partNr = process.argv[3] || '1'

require('ts-node').register()

console.log(`Running day-${dayNr} part-${partNr}...`)

require(path.resolve(__dirname, `day-${dayNr}`, `part-${partNr}.ts`))
