import layout from './layout'
import { createIterator } from './modules/create-iterator'
import { runIterations } from './modules/run-iterations'
import { Spot } from './modules/types'
import {
  getAdjacentPositions,
  getSpotsByPositions,
  isSpotOccupied,
  isSpotEmpty,
  countSpots
} from './modules/utils'

const iterator = createIterator((layout, position) => {
  const adjacentPositions = getAdjacentPositions(position)
  const adjecentSpots = getSpotsByPositions(layout, adjacentPositions)

  if (adjecentSpots.filter(isSpotEmpty).length === 8) {
    return Spot.Occupied
  }

  if (adjecentSpots.filter(isSpotOccupied).length >= 4) {
    return Spot.Empty
  }
})

const finalLayout = runIterations(layout, iterator)
const numberOfOccupiedSpots = countSpots(finalLayout, Spot.Occupied)
console.log(numberOfOccupiedSpots)
