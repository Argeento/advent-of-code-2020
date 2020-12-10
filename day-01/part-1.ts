import { getNumbersFromFile } from '../utils'

const entries = getNumbersFromFile(`${__dirname}/input.txt`)

firstLoop: for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    if (entries[i] + entries[j] === 2020) {
      console.log(entries[i] * entries[j])
      break firstLoop
    }
  }
}
