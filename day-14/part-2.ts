import { code, sumMem } from './system'

let mask: string
const addrs: Set<number> = new Set()
const mem: number[] = new Proxy([], {
  set(mem: number[], key: string, value: number) {
    const index = parseInt(key)
    const binIndex = [...index.toString(2).padStart(36, '0')]
    let floatingBits = 0

    // Apply the mask
    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === 'X') {
        floatingBits += 1
        binIndex[i] = 'X'
      } else if (mask[i] === '1') {
        binIndex[i] = '1'
      }
    }

    // Create all permutations
    for (let i = 0; i < 2 ** floatingBits; i++) {
      const permutation = [...i.toString(2).padStart(floatingBits, '0')]
      const tmpIndex = [...binIndex]

      for (let j = 0; j < mask.length; j++) {
        if (tmpIndex[j] === 'X') {
          tmpIndex[j] = permutation.shift()
        }
      }

      const index = parseInt(tmpIndex.join(''), 2)
      addrs.add(index)
      mem[index] = value
    }

    return true
  }
})

// eslint-disable-next-line no-eval
eval(code)

console.log(sumMem(mem, addrs))
