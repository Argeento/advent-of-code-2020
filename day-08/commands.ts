import { getLinesFromFile } from '../utils'

export enum CommandTypes {
  Nop = 'nop',
  Jmp = 'jmp',
  Acc = 'acc'
}

const lines = getLinesFromFile(`${__dirname}/input.txt`)

export const commands = lines.map(line => {
  const [name, value] = line.split(' ')
  return { name, value: parseFloat(value) }
})
