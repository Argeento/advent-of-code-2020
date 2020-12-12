export interface Layout extends Array<Spot[]> {}

export interface Position {
  x: number
  y: number
}

export enum Spot {
  Occupied = '#',
  Outside = ' ',
  Empty = 'L',
  Floor = '.'
}
