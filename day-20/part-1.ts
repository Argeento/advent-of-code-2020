import { asc, deepCopy, multiply } from '../utils'
import { findPosition } from './find-position'
import { tiles } from './tiles'
import { Position, Tile } from './types'

const tilesLeft = deepCopy<Tile[]>(tiles).slice(1)
const space: Position[] = [
  {
    tilePermutation: tiles[0][0],
    x: 0,
    y: 0
  }
]

while (tilesLeft.length > 0) {
  for (let i = 0; i < tilesLeft.length; i++) {
    const tile = tilesLeft[i]
    const position = findPosition(tile, space)

    if (position) {
      space.push(position)
      tilesLeft.splice(i, 1)
      break
    }
  }
}

space.sort((positionA, positionB) => asc(positionA.x, positionB.x))
const minX = space[0].x
const maxX = space[space.length - 1].x

space.sort((positionA, positionB) => asc(positionA.y, positionB.y))
const minY = space[0].y
const maxY = space[space.length - 1].y

const cornersIds = [
  space.find(position => position.x === minX && position.y === minY),
  space.find(position => position.x === maxX && position.y === minY),
  space.find(position => position.x === minX && position.y === maxY),
  space.find(position => position.x === maxX && position.y === maxY)
].map(position => position.tilePermutation.tileId)

console.log(cornersIds.reduce(multiply))
