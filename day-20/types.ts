export interface Edges {
  top: string
  bottom: string
  left: string
  right: string
}

interface TilePermutation {
  tileId: number
  rotation: 0 | 90 | 180 | 270
  isFlipedX: boolean
  isFlipedY: boolean
  edges: Edges
}

export interface Tile extends Array<TilePermutation> {}

export interface Position {
  tilePermutation: TilePermutation
  x: number
  y: number
}
