import groups from './groups'
import { add } from '../utils'

const sumOfYesAnswers = groups
  .map(answers => new Set(answers.join('')).size)
  .reduce(add)

console.log(sumOfYesAnswers)
