import { getNumbersFromFile } from '../utils'

const jolts = getNumbersFromFile(`${__dirname}/input.txt`)
jolts.sort((a, b) => a - b)

interface Chain {
  [key: number]: number
}

const chain: Chain = {}

chain[0] = 1

for (let i = 0; i < jolts.length; i++) {
  for (let j = i + 1; jolts[j] < jolts[i] + 4; j++) {
    chain[j] = chain[j] || 0
    chain[j] += chain[i]
  }
}

const lastKey = Object.keys(chain).pop()

console.log(chain[lastKey] * 2)
