import seatIds from './seatIds'

const descSortedSeatIds = seatIds.sort((a, b) => b - a)
const highestId = descSortedSeatIds[0]

console.log(highestId)
