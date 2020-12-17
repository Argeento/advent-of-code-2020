import { SPACE_CENTER_OFFSET } from '../space'
import { Space, Cube, Position4d, Position3d } from './types'

export function isCubeActive(cube: Cube): boolean {
  return cube === Cube.Active
}

export function isCubeInactive(cube: Cube): boolean {
  return cube === Cube.Inactive
}

export function countCubes(cubes: Cube[], cube: Cube): number {
  return cubes.filter(layoutCube => layoutCube === cube).length
}

export function getSpotsByPositions4d(
  layout: Space,
  positions: Position4d[]
): Cube[] {
  return positions.map(position => {
    const { w, z, y, x } = position
    return layout[w]?.[z]?.[y]?.[x] ?? Cube.Inactive
  })
}

export function getSpotsByPositions3d(
  layout: Space,
  positions: Position3d[]
): Cube[] {
  return positions.map(position => {
    const { z, y, x } = position
    return layout[SPACE_CENTER_OFFSET][z]?.[y]?.[x] ?? Cube.Inactive
  })
}

getAdjacentPositions4d.memo = {}
export function getAdjacentPositions4d(position: Position4d): Position4d[] {
  const argsKey = `${position.w},${position.z},${position.y},${position.x}`
  if (getAdjacentPositions4d.memo[argsKey]) {
    return getAdjacentPositions4d.memo[argsKey]
  }

  const adjacentPositions = []

  for (const w of [-1, 0, 1]) {
    for (const z of [-1, 0, 1]) {
      for (const y of [-1, 0, 1]) {
        for (const x of [-1, 0, 1]) {
          if (x !== 0 || y !== 0 || z !== 0 || w !== 0) {
            adjacentPositions.push({
              w: position.w + w,
              z: position.z + z,
              y: position.y + y,
              x: position.x + x
            })
          }
        }
      }
    }
  }

  getAdjacentPositions4d.memo[argsKey] = adjacentPositions
  return adjacentPositions
}

getAdjacentPositions3d.memo = {}
export function getAdjacentPositions3d(position: Position3d): Position3d[] {
  const argsKey = `${position.z},${position.y},${position.x}`
  if (getAdjacentPositions3d.memo[argsKey]) {
    return getAdjacentPositions3d.memo[argsKey]
  }

  const adjacentPositions = []

  for (const z of [-1, 0, 1]) {
    for (const y of [-1, 0, 1]) {
      for (const x of [-1, 0, 1]) {
        if (x !== 0 || y !== 0 || z !== 0) {
          adjacentPositions.push({
            z: position.z + z,
            y: position.y + y,
            x: position.x + x
          })
        }
      }
    }
  }

  getAdjacentPositions3d.memo[argsKey] = adjacentPositions
  return adjacentPositions
}
