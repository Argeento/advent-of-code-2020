import { readFileSync } from 'fs'

const groups = readFileSync(`${__dirname}/input.txt`).toString().split('\n\n')

export default groups
