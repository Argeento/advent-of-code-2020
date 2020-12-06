import { readFileSync } from 'fs'

const groups = readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n\n')
  .map(data => data.split('\n'))

export default groups
