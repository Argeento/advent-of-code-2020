import groups from './groups'
import { add } from '../utils'

const sumOfYesAnswers = groups
  .map(group => new Set(group.replace(/\n/g, '')).size)
  .reduce(add)

console.log(sumOfYesAnswers)
