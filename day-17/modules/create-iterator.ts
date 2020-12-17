import { SPACE_CENTER_OFFSET, SPACE_LENGTH } from '../space'
import { Space, Cube, Position3d, Position4d } from './types'

export function createIterator4d(
  fn: (layout: Space, position: Position4d, cube: Cube) => Cube
) {
  return function getNextIteration4d(layout: Space): Space {
    const nextLayout: Space = JSON.parse(JSON.stringify(layout))

    for (let w = 0; w < SPACE_LENGTH; w++) {
      for (let z = 0; z < SPACE_LENGTH; z++) {
        for (let x = 0; x < SPACE_LENGTH; x++) {
          for (let y = 0; y < SPACE_LENGTH; y++) {
            const position = { w, z, y, x }
            const cube = layout[w][z][y][x] || Cube.Inactive
            const newCube = fn(layout, position, cube) || cube
            nextLayout[w][z][y][x] = newCube
          }
        }
      }
    }

    return nextLayout
  }
}

export function createIterator3d(
  fn: (layout: Space, position: Position3d, cube: Cube) => Cube
) {
  return function getNextIteration3d(layout: Space): Space {
    const nextLayout: Space = JSON.parse(JSON.stringify(layout))

    for (let z = 0; z < SPACE_LENGTH; z++) {
      for (let x = 0; x < SPACE_LENGTH; x++) {
        for (let y = 0; y < SPACE_LENGTH; y++) {
          const position = { w: 0, z, y, x }
          const cube = layout[SPACE_CENTER_OFFSET][z][y][x] || Cube.Inactive
          const newCube = fn(layout, position, cube) || cube
          nextLayout[SPACE_CENTER_OFFSET][z][y][x] = newCube
        }
      }
    }

    return nextLayout
  }
}
