import { getNumbersFromFile } from '../utils'

const INVALID_NUMBER = 23278925
const numbers = getNumbersFromFile(`${__dirname}/input.txt`)
let subset: number[] | null = null

numbersLoop: for (let i = 0; i < numbers.length; i++) {
  let sum = 0

  subsetLoop: for (let j = i; j < numbers.length; j++) {
    sum += numbers[j]

    if (sum === INVALID_NUMBER) {
      subset = numbers.slice(i, j + 1)
      break numbersLoop
    }

    if (sum > INVALID_NUMBER) {
      break subsetLoop
    }
  }
}

subset.sort((a, b) => a - b)

const smallest = subset[0]
const largest = subset[subset.length - 1]

console.log(smallest + largest)
