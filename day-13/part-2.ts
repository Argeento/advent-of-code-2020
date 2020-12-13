import { getLinesFromFile } from '../utils'

const lines = getLinesFromFile(`${__dirname}/input.txt`)
const buses = lines[1]
  .split(',')
  .map(id => parseInt(id))
  .map((id, offset) => ({ id, offset }))
  .filter(bus => bus.id)

const letters = 'abcdfhjklmns'
const equation = buses
  .map((bus, i) => `${bus.id}${letters[i]}-${bus.offset}`)
  .join(' = ')

console.log('Copy the equation to https://www.wolframalpha.com/')
console.log(equation)
console.log(`And multiply 'a' by ${buses[0].id}`)
