import space from './space'
import { createIterator3d } from './modules/create-iterator'
import { runIterations } from './modules/run-iterations'
import { Cube } from './modules/types'
import {
  getAdjacentPositions3d,
  getSpotsByPositions3d,
  countCubes
} from './modules/utils'

const iterator = createIterator3d((layout, position, cube) => {
  const adjacentPositions = getAdjacentPositions3d(position)
  const adjacentCubes = getSpotsByPositions3d(layout, adjacentPositions)
  const activeCubes = countCubes(adjacentCubes, Cube.Active)

  if (cube === Cube.Active) {
    if (activeCubes === 2 || activeCubes === 3) {
      return Cube.Active
    } else {
      return Cube.Inactive
    }
  }

  if (cube === Cube.Inactive) {
    if (activeCubes === 3) {
      return Cube.Active
    } else {
      return Cube.Inactive
    }
  }
})

const finalLayout = runIterations(space, iterator, 6)
const numberOfActiveCubes = countCubes(finalLayout.flat(3), Cube.Active)
console.log(numberOfActiveCubes)
