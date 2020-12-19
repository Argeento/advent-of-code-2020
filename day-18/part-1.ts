/* eslint-disable no-eval */
import { add, getLinesFromFile } from '../utils'
import { createCalc } from './calc'

const lines = getLinesFromFile(`${__dirname}/input.txt`)

const calc = createCalc(equation => {
  const numberOfBrackets = equation.split(/\d+/).length - 1
  const openBrackets = '('.repeat(numberOfBrackets)
  const closeBrackets = equation.replace(/(\d+)/g, '$1)')
  return eval(openBrackets + closeBrackets)
})

console.log(lines.map(calc).reduce(add))
