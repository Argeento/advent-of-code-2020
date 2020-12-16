import { isInRange } from '../utils'
import { readFileSync } from 'fs'

const [fieldsData, myTicketData, nearbyTicketsData] = readFileSync(
  `${__dirname}/input.txt`
)
  .toString()
  .split('\n\n')

export const fields = fieldsData.split('\n').map(line => {
  const [name, rangesData] = line.split(': ')
  const ranges = rangesData.split(' or ').map(rangeData => {
    const [min, max] = rangeData.split('-').map(Number)
    return { min, max }
  })

  function checkValue(value: number): boolean {
    return ranges.some(range => isInRange(range.min, value, range.max))
  }

  return { name, checkValue }
})

export const myTicket = myTicketData.split('\n')[1].split(',').map(Number)

export const nearbyTickets = nearbyTicketsData
  .split('\n')
  .slice(1)
  .map(line => line.split(',').map(Number))

export const tickets = [...nearbyTickets.filter(isTicketValid), myTicket]

function isTicketValid(ticket: number[]): boolean {
  return ticket.every(number => {
    return fields.some(field => field.checkValue(number))
  })
}
