import { multiply } from '../utils'
import { fields, myTicket, tickets } from './data'

let possibilites: string[][] = []
for (let i = 0; i < tickets[0].length; i++) {
  const possibleFieldNames = fields
    .filter(field => {
      const values = tickets.map(ticket => ticket[i])
      const isFieldValid = values.every(value => field.checkValue(value))
      return isFieldValid
    })
    .map(field => field.name)

  possibilites.push(possibleFieldNames)
}

const knownFields: Array<{ index: number; name: string }> = []

while (possibilites.some(possibleFields => possibleFields.length > 0)) {
  const knownIndex = possibilites.findIndex(fields => fields.length === 1)
  const knownFieldName = possibilites[knownIndex][0]
  knownFields.push({ index: knownIndex, name: knownFieldName })

  possibilites = possibilites.map(possibleFields => {
    return possibleFields.filter(fieldName => fieldName !== knownFieldName)
  })
}

const departureFields = knownFields.filter(field => {
  return field.name.startsWith('departure')
})

const myTicketDepartureValues = departureFields.map(field => {
  return myTicket[field.index]
})

console.log(myTicketDepartureValues.reduce(multiply))
