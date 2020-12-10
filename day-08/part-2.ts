import { commands, CommandTypes } from './commands'

let i = 0
let acc = 0

commands[210].name = CommandTypes.Nop

while (commands[i] !== undefined) {
  const command = commands[i]

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
