import { group } from 'console'
import groups from './groups'
import { add } from '../utils'

const sumOfYesAnswers = groups
  .map(group => {
    const answers = group.split('\n')
    const numberOfPeople = answers.length
    const concatenatedAnswers = answers.join('')
    const uniqueAnswers = new Set(concatenatedAnswers)

    return [...uniqueAnswers].filter(letter => {
      return concatenatedAnswers.split(letter).length - 1 === numberOfPeople
    }).length
  })
  .reduce(add)

console.log(sumOfYesAnswers)
