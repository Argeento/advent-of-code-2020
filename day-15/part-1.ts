import { play } from './play'

const startingNumbers = [17, 1, 3, 16, 19, 0]
const numberOfTurns = 2020
const lastNumber = play(startingNumbers, numberOfTurns)

console.log(lastNumber)
