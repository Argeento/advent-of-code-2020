import { Rules } from './input'

const mem = {}
export function findRule(
  rules: Rules,
  ruleNr: string = '0',
  depth: number = 0
): string {
  if (depth++ > 35) return ''
  if (mem[ruleNr]) return mem[ruleNr]

  const originalRule = rules[ruleNr]
  let rule: string

  if (originalRule === 'a' || originalRule === 'b') {
    rule = originalRule
  } else {
    const preRegex = originalRule.replace(/\d+/g, rule => {
      return findRule(rules, rule, depth + 1)
    })

    rule = `(${preRegex})`.replace(/ /g, '')
  }

  mem[ruleNr] = rule
  return rule
}
