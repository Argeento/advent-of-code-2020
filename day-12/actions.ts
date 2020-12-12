import { getLinesFromFile } from '../utils'

export enum Action {
  North = 'N',
  South = 'S',
  East = 'E',
  West = 'W',
  RotateLeft = 'L',
  RotateRight = 'R',
  Forward = 'F'
}

const lines = getLinesFromFile(`${__dirname}/input.txt`)
export const actions = lines.map(line => {
  const type = line[0] as Action
  const value = parseInt(line.slice(1))

  return { type, value }
})
