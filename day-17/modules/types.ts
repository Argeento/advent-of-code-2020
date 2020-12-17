export interface Space extends Array<Cube[][][]> {}

export interface Position3d {
  x: number
  y: number
  z: number
}

export interface Position4d extends Position3d {
  w: number
}

export enum Cube {
  Active = '#',
  Inactive = '.'
}
