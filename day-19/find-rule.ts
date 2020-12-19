import { Rules } from './input'

export function findRule(rules: Rules, ruleNr: string = '0'): string {
  const rule = rules[ruleNr]

  if (rule === 'a' || rule === 'b') {
    return rule
  } else {
    const preRegex = rule.replace(/\d+/g, rule => findRule(rules, rule))
    return `(${preRegex})`.replace(/ /g, '')
  }
}
