import { commands, CommandTypes } from './commands'

const executedCommandsIndexes = []

let i = 0
let acc = 0

while (!executedCommandsIndexes.includes(i)) {
  const command = commands[i]
  executedCommandsIndexes.push(i)

  if (command.name === CommandTypes.Acc) {
    acc += command.value
    i += 1
    continue
  }

  if (command.name === CommandTypes.Jmp) {
    i += command.value
    continue
  }

  if (command.name === CommandTypes.Nop) {
    i += 1
    continue
  }
}

console.log(acc)
