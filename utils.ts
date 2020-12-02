import { readFileSync } from 'fs'

export function getLinesFromFile (file: string) {
  return readFileSync(file)
    .toString()
    .split('\n')
}

export function getNumbersFromFile (file: string) {
  return getLinesFromFile(file).map(line => parseFloat(line))
}
