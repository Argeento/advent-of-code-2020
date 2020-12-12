import { Layout, Spot, Position } from './types'

export function createIterator(
  fn: (layout: Layout, position: Position) => Spot
) {
  return function getNextIteration(layout: Layout): Layout {
    const nextLayout: Layout = JSON.parse(JSON.stringify(layout))
    const rows = layout[0].length
    const columns = layout.length

    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const position = { x, y }
        const spot = layout[y][x]

        if (spot !== Spot.Floor) {
          const newSpot = fn(layout, position) || spot
          nextLayout[y][x] = newSpot
        }
      }
    }

    return nextLayout
  }
}
