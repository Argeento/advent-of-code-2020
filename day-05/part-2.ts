import seatIds from './seatIds'

const ascSortedSeatIds = seatIds.sort((a, b) => a - b)

let myId: number

for (let i = 0; i < ascSortedSeatIds.length - 1; i++) {
  const seatId = seatIds[i]
  const nextSeatId = seatIds[i + 1]

  if (nextSeatId - seatId === 2) {
    myId = seatId + 1
    break
  }
}

console.log(myId)
