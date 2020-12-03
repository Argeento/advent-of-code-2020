import { getLinesFromFile } from '../utils'

const lines = getLinesFromFile(`${__dirname}/input.txt`)
const patternLength = lines[0].length

function isTreeInPostion (position: { x: number, y: number }): boolean {
  return lines[position.y][position.x % patternLength] === '#'
}

let numberOfEncouterTrees = 0
const ourPositon = { x: 0, y: 0 }

for (let i = 0; i < lines.length; i++) {
  numberOfEncouterTrees += isTreeInPostion(ourPositon) ? 1 : 0
  ourPositon.y += 1
  ourPositon.x += 3
}

console.log(
  numberOfEncouterTrees
)
