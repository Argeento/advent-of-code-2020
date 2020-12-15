export function play(startingNumbers: number[], numberOfTurns: number): number {
  /**
   * Init memory
   *
   * (For better performance a real memory array is used)
   */
  const memory = new Uint16Array(numberOfTurns)
  for (let i = 0; i < startingNumbers.length; i++) {
    const number = startingNumbers[i]
    memory[number] = i + 1
  }

  // Play
  let lastNumber = startingNumbers[startingNumbers.length - 1]

  for (let turn = startingNumbers.length; turn < numberOfTurns; turn++) {
    let nextNumber: number

    if (memory[lastNumber]) {
      nextNumber = turn - memory[lastNumber]
    } else {
      nextNumber = 0
    }

    memory[lastNumber] = turn
    lastNumber = nextNumber
  }

  return lastNumber
}
