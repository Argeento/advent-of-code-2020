import { getManhatanDistance } from '../utils'
import { actions, Action } from './actions'

// Rewrite all RotateRight actions to RotateLeft
actions.forEach(action => {
  if (action.type === Action.RotateRight) {
    action.type = Action.RotateLeft
    action.value = 360 - action.value
  }
})

const shipPosition = { x: 0, y: 0 }
let waypointRelativePositon = { x: 10, y: 1 }

actions.forEach(action => {
  const shipActions = {
    [Action.North](value: number) {
      waypointRelativePositon.y += value
    },
    [Action.South](value: number) {
      waypointRelativePositon.y -= value
    },
    [Action.East](value: number) {
      waypointRelativePositon.x += value
    },
    [Action.West](value: number) {
      waypointRelativePositon.x -= value
    },
    [Action.RotateLeft](value: number) {
      value %= 360

      if (value === 90) {
        waypointRelativePositon = {
          x: -waypointRelativePositon.y,
          y: waypointRelativePositon.x
        }
      }

      if (value === 180) {
        waypointRelativePositon = {
          x: -waypointRelativePositon.x,
          y: -waypointRelativePositon.y
        }
      }

      if (value === 270) {
        waypointRelativePositon = {
          x: waypointRelativePositon.y,
          y: -waypointRelativePositon.x
        }
      }
    },
    [Action.Forward](value: number) {
      shipPosition.x += waypointRelativePositon.x * value
      shipPosition.y += waypointRelativePositon.y * value
    }
  }

  shipActions[action.type](action.value)
})

const distance = getManhatanDistance(shipPosition)
console.log(distance)
