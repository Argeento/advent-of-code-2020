import { getLinesFromFile, asc } from '../utils'

const lines = getLinesFromFile(`${__dirname}/input.txt`)

const now = parseInt(lines[0])
const busesIds = lines[1]
  .split(',')
  .filter(id => id !== 'x')
  .map(id => parseInt(id))

function getNearestTimestamp(now: number, busId: number): number {
  let timestamp = 0
  while (timestamp < now) {
    timestamp += busId
  }

  return timestamp
}

const nextBuses = busesIds.map(busId => {
  return {
    timestamp: getNearestTimestamp(now, busId),
    id: busId
  }
})

nextBuses.sort((busA, busB) => asc(busA.timestamp, busB.timestamp))

const nearestBus = nextBuses[0]
const timeLeft = nearestBus.timestamp - now

console.log(nearestBus.id * timeLeft)
