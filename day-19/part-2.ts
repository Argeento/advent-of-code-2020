import { findRule } from './find-rule'
import { rules, messages } from './input'

rules[8] = '42 | 42 8'
rules[11] = '42 31 | 42 11 31'

const regex = new RegExp(`^${findRule(rules)}$`)
const validMessages = messages.filter(message => regex.test(message))

console.log(validMessages.length)
