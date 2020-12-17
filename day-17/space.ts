import { getLinesFromFile } from '../utils'
import { Cube, Space } from './modules/types'

const lines = getLinesFromFile(`${__dirname}/input.txt`)
const space: Space = []

export const SPACE_LENGTH = lines.length * 3
export const SPACE_CENTER_OFFSET = Math.floor((SPACE_LENGTH - lines.length) / 2)
const floor0 = lines.map(row => row.split('') as Cube[])

for (let w = 0; w < SPACE_LENGTH; w++) {
  space[w] = new Array(SPACE_LENGTH)
  for (let z = 0; z < SPACE_LENGTH; z++) {
    space[w][z] = new Array(SPACE_LENGTH)
    for (let y = 0; y < SPACE_LENGTH; y++) {
      space[w][z][y] = new Array(SPACE_LENGTH)
      for (let x = 0; x < SPACE_LENGTH; x++) {
        space[w][z][y][x] = Cube.Inactive
      }
    }
  }
}

const newW = SPACE_CENTER_OFFSET
const newZ = SPACE_CENTER_OFFSET
for (let y = 0; y < floor0.length; y++) {
  const newY = SPACE_CENTER_OFFSET + y
  for (let x = 0; x < floor0[0].length; x++) {
    const newX = SPACE_CENTER_OFFSET + x
    space[newW][newZ][newY][newX] = floor0[y][x]
  }
}

export default space
