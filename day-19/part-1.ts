import { findRule } from './find-rule'
import { rules, messages } from './input'

const regex = new RegExp(`^${findRule(rules)}$`)
const validMessages = messages.filter(message => regex.test(message))

console.log(validMessages.length)
