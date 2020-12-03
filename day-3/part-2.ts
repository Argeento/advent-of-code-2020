import { getLinesFromFile } from '../utils'

const lines = getLinesFromFile(`${__dirname}/input.txt`)
const patternLength = lines[0].length
const slopeLengh = lines.length
const slopes = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 }
]

function isTreeInPostion (position: { x: number, y: number }) {
  return lines[position.y][position.x % patternLength] === '#'
}

function getEncounteredTreesBySlope (slope: { x: number, y: number }) {
  let numberOfEncounteredTrees = 0
  let ourPositon = { x: 0, y: 0 }
  
  for (let i = 0; i < lines.length; i++) {
    numberOfEncounteredTrees += isTreeInPostion(ourPositon) ? 1 : 0
    ourPositon.y += slope.y
    ourPositon.x += slope.x

    if (ourPositon.y >= slopeLengh) {
      break
    }
  }

  return numberOfEncounteredTrees
}

function multiply (acc: number, value: number) {
  return acc * value
}

console.log(
  slopes.map(getEncounteredTreesBySlope).reduce(multiply)
)
