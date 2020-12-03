import { readFileSync } from 'fs'

export function getLinesFromFile (file: string): string[] {
  return readFileSync(file)
    .toString()
    .split('\r\n')
}

export function getNumbersFromFile (file: string): number[] {
  return getLinesFromFile(file).map(line => parseFloat(line))
}
