import { readFileSync } from 'fs'
import { rotateClockwise, flipY, flipX } from '../utils'
import { Edges, Tile } from './types'

export const tiles = readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n\n')
  .map(tileData => {
    const [name, ...rowsData] = tileData.split('\n')
    const id = parseInt(name.match(/\d+/g)[0])
    const rows = rowsData.map(row => row.split(''))
    return getTiles(id, rows)
  })

function getTiles(id: number, rows: string[][]): Tile {
  const tilePermutations: Tile = []

  // No flip
  tilePermutations.push(
    ...getRotatedTiles({
      id,
      rows,
      isFlipedX: false,
      isFlipedY: false
    })
  )

  // Flip X
  tilePermutations.push(
    ...getRotatedTiles({
      id,
      rows: flipX(rows),
      isFlipedX: true,
      isFlipedY: false
    })
  )

  // Flip Y
  tilePermutations.push(
    ...getRotatedTiles({
      id,
      rows: flipY(rows),
      isFlipedX: true,
      isFlipedY: false
    })
  )

  // Flip X and Y
  tilePermutations.push(
    ...getRotatedTiles({
      id,
      rows: flipX(flipY(rows)),
      isFlipedX: true,
      isFlipedY: false
    })
  )

  return tilePermutations
}

function getRotatedTiles({
  id,
  rows,
  isFlipedX,
  isFlipedY
}: {
  id: number
  rows: string[][]
  isFlipedX: boolean
  isFlipedY: boolean
}): Tile {
  const tilePermutations: Tile = []
  let tmpRows = rows

  for (let i = 0; i < 4; i++) {
    tilePermutations.push({
      tileId: id,
      edges: getEdges(tmpRows),
      rotation: (i * 90) as 0 | 90 | 180 | 270,
      isFlipedY,
      isFlipedX
    })

    tmpRows = rotateClockwise(rows)
  }

  return tilePermutations
}

function getEdges(rows: string[][]): Edges {
  return {
    top: rows[0].join(''),
    bottom: rows[rows.length - 1].join(''),
    left: rows.map(row => row[0]).join(''),
    right: rows.map(row => row[row.length - 1]).join('')
  }
}
