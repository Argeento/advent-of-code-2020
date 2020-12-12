import { actions, Action } from './actions'
import { getManhatanDistance } from '../utils'

const ship = {
  rotation: 0,
  position: { x: 0, y: 0 }
}

actions.forEach(action => {
  const shipActions = {
    [Action.North](value: number) {
      ship.position.y += value
    },
    [Action.South](value: number) {
      ship.position.y -= value
    },
    [Action.East](value: number) {
      ship.position.x += value
    },
    [Action.West](value: number) {
      ship.position.x -= value
    },
    [Action.RotateLeft](value: number) {
      ship.rotation -= value
    },
    [Action.RotateRight](value: number) {
      ship.rotation += value
    },
    [Action.Forward](value: number) {
      let degree = ship.rotation % 360
      if (degree < 0) degree = 360 + degree

      const directions = [Action.East, Action.South, Action.North, Action.West]
      const direction = directions[degree / 90]

      shipActions[direction](value)
    }
  }

  shipActions[action.type](action.value)
})

const distance = getManhatanDistance(ship.position)
console.log(distance)
