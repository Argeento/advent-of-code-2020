import { Layout, Spot, Position } from './types'

export function isSpotEmpty(spot: Spot): boolean {
  return [Spot.Empty, Spot.Floor, Spot.Outside].includes(spot)
}

export function isSpotOccupied(spot: Spot): boolean {
  return spot === Spot.Occupied
}

export function isSpotASeat(spot: Spot): boolean {
  return spot === Spot.Occupied || spot === Spot.Empty
}

export function countSpots(layout: Layout, spot: Spot): number {
  return (
    layout
      .map(row => row.join(''))
      .join('')
      .split(spot).length - 1
  )
}

export function getSpotsByPositions(
  layout: Layout,
  positions: Position[]
): Spot[] {
  return positions.map(
    position => layout[position.y]?.[position.x] ?? Spot.Outside
  )
}

getAdjacentPositions.memo = {}
export function getAdjacentPositions(position: Position): Position[] {
  const argsKey = `${position.x},${position.y}`
  if (getAdjacentPositions.memo[argsKey]) {
    return getAdjacentPositions.memo[argsKey]
  }

  const adjacentPositions = []
  for (const y of [-1, 0, 1]) {
    for (const x of [-1, 0, 1]) {
      if (x !== 0 || y !== 0) {
        adjacentPositions.push({
          x: position.x + x,
          y: position.y + y
        })
      }
    }
  }

  getAdjacentPositions.memo[argsKey] = adjacentPositions
  return adjacentPositions
}

getDiagonals.memo = {}
export function getDiagonals(layout: Layout, position: Position): Position[][] {
  const argsKey = `${position.x},${position.y}`
  if (getDiagonals.memo[argsKey]) {
    return getDiagonals.memo[argsKey]
  }

  const { x, y } = position
  const maxX = layout[0].length - 1
  const maxY = layout.length - 1
  const max = Math.max(maxX, maxY)
  let diagonals: Position[][] = [[], [], [], [], [], [], [], []]

  for (let i = 1; i < max; i++) {
    const positions = [1, 2, 3, 4, 5, 6, 7, 8]
      .map(nr => nr.toString(3).padStart(2, '0'))
      .map(nr => [...nr].map(nr => (nr === '2' ? i : nr === '1' ? -i : 0)))
      .map(([x, y]) => ({ x, y }))

    for (let j = 0; j < 8; j++) {
      diagonals[j].push({
        x: positions[j].x + x,
        y: positions[j].y + y
      })
    }
  }

  diagonals = diagonals.map(positions => {
    return positions.filter(({ x, y }) => {
      return x >= -1 && x <= maxX + 1 && y >= -1 && y <= maxY + 1
    })
  })

  getDiagonals.memo[argsKey] = diagonals
  return diagonals
}
