import { getNumbersFromFile } from '../utils'

const PREAMBLE = 25
const numbers = getNumbersFromFile(`${__dirname}/input.txt`)

for (let i = PREAMBLE; i < numbers.length; i++) {
  const number = numbers[i]
  const numbersToCheck = numbers.slice(i - PREAMBLE, i)
  const isNumberValid = getEverySum(numbersToCheck).some(sum => sum === number)

  if (!isNumberValid) {
    console.log(number)
    break
  }
}

function getEverySum(numbers: number[]): number[] {
  const sums = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] !== numbers[j]) {
        sums.push(numbers[i] + numbers[j])
      }
    }
  }

  return [...new Set(sums)]
}
