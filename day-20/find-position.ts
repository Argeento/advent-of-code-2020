import { Position, Tile } from './types'

export function findPosition(tile: Tile, space: Position[]): Position | null {
  for (let i = 0; i < tile.length; i++) {
    const tilePermutation = tile[i]

    for (let j = 0; j < space.length; j++) {
      const position = space[j]

      if (tilePermutation.edges.top === position.tilePermutation.edges.bottom) {
        return {
          tilePermutation,
          x: position.x,
          y: position.y - 1
        }
      }

      if (tilePermutation.edges.bottom === position.tilePermutation.edges.top) {
        return {
          tilePermutation,
          x: position.x,
          y: position.y + 1
        }
      }

      if (tilePermutation.edges.right === position.tilePermutation.edges.left) {
        return {
          tilePermutation,
          x: position.x - 1,
          y: position.y
        }
      }

      if (tilePermutation.edges.left === position.tilePermutation.edges.right) {
        return {
          tilePermutation,
          x: position.x + 1,
          y: position.y
        }
      }
    }
  }

  return null
}
