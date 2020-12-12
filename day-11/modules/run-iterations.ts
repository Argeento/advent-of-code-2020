import { Layout } from './types'

function areLayoutsTheSame(layoutA: Layout, layoutB: Layout): boolean {
  return JSON.stringify(layoutA) === JSON.stringify(layoutB)
}

export function runIterations(
  initialLayout: Layout,
  iterator: (layout: Layout) => Layout
): Layout {
  let layout: Layout | null = null
  let nextLayout = initialLayout

  do {
    layout = nextLayout
    nextLayout = iterator(layout)
  } while (!areLayoutsTheSame(nextLayout, layout))

  return layout
}
