import layout from './layout'
import { createIterator } from './modules/create-iterator'
import { runIterations } from './modules/run-iterations'
import { Spot } from './modules/types'
import {
  getSpotsByPositions,
  getDiagonals,
  isSpotOccupied,
  isSpotEmpty,
  isSpotASeat,
  countSpots
} from './modules/utils'

const iterator = createIterator((layout, position) => {
  const diagonals = getDiagonals(layout, position)
  const diagonalsSpots = diagonals.map(positions => {
    return getSpotsByPositions(layout, positions)
  })

  const firstSeats = diagonalsSpots.map(spots => {
    const onlySeats = spots.filter(isSpotASeat)
    const firstSeatToBeSeen = onlySeats[0]
    return firstSeatToBeSeen
  })

  if (firstSeats.filter(isSpotEmpty).length === 8) {
    return Spot.Occupied
  }

  if (firstSeats.filter(isSpotOccupied).length >= 5) {
    return Spot.Empty
  }
})

const finalLayout = runIterations(layout, iterator)
const numberOfOccupiedSpots = countSpots(finalLayout, Spot.Occupied)
console.log(numberOfOccupiedSpots)
