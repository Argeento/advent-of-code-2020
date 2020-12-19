/* eslint-disable no-eval */
import { add, getLinesFromFile } from '../utils'
import { createCalc } from './calc'

const lines = getLinesFromFile(`${__dirname}/input.txt`)

const calc = createCalc(equation => {
  while (equation.includes('+')) {
    equation = equation.replace(/\d+ \+ \d+/, eval)
  }

  return eval(equation)
})

console.log(lines.map(calc).reduce(add))
