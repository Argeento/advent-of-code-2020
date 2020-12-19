import { findRule } from './find-rule'
import { rules, messages, Rules } from './input'

const initRules = rules

function createRules(rules: Rules, rule8: string, rule11: string): Rules {
  const newRules = JSON.parse(JSON.stringify(rules))
  newRules[8] = rule8
  newRules[11] = rule11
  return newRules
}

const rule8Permutations = [
  '42',
  '42 42',
  '42 42 42',
  '42 42 42 42',
  '42 42 42 42 42'
]

const rule11Permutations = [
  '42 31',
  '42 42 31 31',
  '42 42 42 31 31 31',
  '42 42 42 42 31 31 31 31'
]

const permutations = []
for (let i = 0; i < rule8Permutations.length; i++) {
  for (let j = 0; j < rule11Permutations.length; j++) {
    permutations.push({
      rule8: rule8Permutations[i],
      rule11: rule11Permutations[j]
    })
  }
}

const regexPermutations = permutations.map(permutation => {
  const rules = createRules(initRules, permutation.rule8, permutation.rule11)
  return new RegExp(`^${findRule(rules)}$`)
})

const validMessages = messages.filter(message => {
  return regexPermutations.some(regex => regex.test(message))
})

console.log(validMessages.length)
