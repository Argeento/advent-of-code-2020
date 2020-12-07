import { bags } from './bags'

function findBagsContainingGoldBag(
  colors: string[] = ['shiny gold'],
  allColors: string[] = []
): string[] {
  if (colors.length === 0) {
    return [...new Set(allColors)]
  }

  const outerColors = bags
    .filter(bag =>
      bag.innerBags.some(innerBag => colors.includes(innerBag.color))
    )
    .map(innerBag => innerBag.color)

  allColors.push(...outerColors)

  return findBagsContainingGoldBag(outerColors, allColors)
}

console.log(findBagsContainingGoldBag().length)
