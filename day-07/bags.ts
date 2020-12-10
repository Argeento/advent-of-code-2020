import { getLinesFromFile } from '../utils'

const lines = getLinesFromFile(`${__dirname}/input.txt`)

interface Bag {
  color: string
  innerBags: InnerBag[]
}

export interface InnerBag {
  color: string
  quantity: number
}

export const bags: Bag[] = lines.map(line => {
  const matchedBags = line.match(/(^|\d+ ).*? bag/g)
  const [color, ...innerBagsData] = matchedBags.map(data =>
    data.replace(/ bag/g, '')
  )

  const innerBags = innerBagsData.map(innerBagData => {
    const bag = innerBagData.match(/(?<quantity>\d+) (?<color>.*)/).groups

    return {
      color: bag.color,
      quantity: parseInt(bag.quantity)
    }
  })

  return { color, innerBags }
})
