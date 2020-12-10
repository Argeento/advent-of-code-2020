import { getNumbersFromFile } from '../utils'

const jolts = getNumbersFromFile(`${__dirname}/input.txt`)
jolts.sort((a, b) => a - b)

// Add charging outlet
jolts.unshift(0)

// Add device
const highestJolts = jolts[jolts.length - 1]
jolts.push(highestJolts + 3)

const diffs = []
for (let i = 0; i < jolts.length - 1; i++) {
  diffs.push(jolts[i + 1] - jolts[i])
}

console.log(
  diffs.filter(x => x === 3).length * diffs.filter(x => x === 1).length
)
