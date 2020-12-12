import { readFileSync } from 'fs'

export interface Position {
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

export function getManhatanDistance(
  positionA: Position,
  positionB: Position = { x: 0, y: 0 }
): number {
  return (
    Math.abs(positionA.x - positionB.x) + Math.abs(positionA.y - positionB.y)
  )
}
