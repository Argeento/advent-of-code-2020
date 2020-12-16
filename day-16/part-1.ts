import { add } from '../utils'
import { fields, nearbyTickets } from './data'

function isNumberInvalid(number: number): boolean {
  return !fields.some(field => field.checkValue(number))
}

const values = nearbyTickets.flat()
const invalidValues = values.filter(isNumberInvalid)
const errorRate = invalidValues.reduce(add)

console.log(errorRate)
