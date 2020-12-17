import { Space } from './types'

export function runIterations(
  initialLayout: Space,
  iterator: (layout: Space) => Space,
  numberOfCycles: number
): Space {
  let layout = initialLayout
  for (let i = 0; i < numberOfCycles; i++) {
    layout = iterator(layout)
  }

  return layout
}
