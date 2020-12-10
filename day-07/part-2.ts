import { bags, InnerBag } from './bags'

function calcNumberOfInnerBags(innerBags: InnerBag[]): number {
  return innerBags.reduce((numberOfAllBags, innerBag) => {
    const bag = bags.find(bag => bag.color === innerBag.color)
    return (
      numberOfAllBags +
      innerBag.quantity +
      innerBag.quantity * calcNumberOfInnerBags(bag.innerBags)
    )
  }, 0)
}

const shinyGoldBag = bags.find(bag => bag.color === 'shiny gold')
const bagsInShinyGoldBag = calcNumberOfInnerBags(shinyGoldBag.innerBags)

console.log(bagsInShinyGoldBag)
