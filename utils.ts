import { readFileSync } from 'fs'

interface Array2d extends Array<any[]> {}
export interface Position2d {
  x: number
  y: number
}

export function getLinesFromFile(file: string): string[] {
  return readFileSync(file).toString().split('\n')
}

export function getNumbersFromFile(file: string): number[] {
  return getLinesFromFile(file).map(line => parseFloat(line))
}

export function add(a: number, b: number): number {
  return a + b
}

export function multiply(a: number, b: number): number {
  return a * b
}

export function asc(a: any, b: any): number {
  return a - b
}

export function desc(a: any, b: any): number {
  return b - a
}

export function isInRange(min: number, value: number, max: number): boolean {
  return value >= min && value <= max
}

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function rotateClockwise(arr: Array2d): Array2d {
  const copy = deepCopy<Array2d>(arr)
  const n = copy.length
  const x = Math.floor(n / 2)
  const y = n - 1

  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      const tmp = copy[i][j]
      copy[i][j] = copy[y - j][i]
      copy[y - j][i] = copy[y - i][y - j]
      copy[y - i][y - j] = copy[j][y - i]
      copy[j][y - i] = tmp
    }
  }

  return copy
}

export function flipX(arr: Array2d): Array2d {
  let copy = deepCopy<Array2d>(arr)
  copy = copy.map(row => row.reverse())

  return copy
}

export function flipY(arr: Array2d): Array2d {
  let copy = deepCopy<Array2d>(arr)
  copy = copy.reverse()

  return copy
}

export function getManhatanDistance(
  positionA: Position2d,
  positionB: Position2d = { x: 0, y: 0 }
): number {
  return (
    Math.abs(positionA.x - positionB.x) + Math.abs(positionA.y - positionB.y)
  )
}
