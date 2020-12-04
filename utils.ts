import { readFileSync } from 'fs'

export function getLinesFromFile(file: string): string[] {
  return readFileSync(file).toString().split('\n')
}

export function getNumbersFromFile(file: string): number[] {
  return getLinesFromFile(file).map(line => parseFloat(line))
}
