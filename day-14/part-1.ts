import { code, sumMem } from './system'

let mask: string
const addrs: Set<number> = new Set()
const mem: number[] = new Proxy([], {
  set(mem: number[], key: string, value: number) {
    const index = parseInt(key)
    const binValue = [...value.toString(2).padStart(36, '0')]

    // Apply the mask
    for (let i = 0; i < mask.length; i++) {
      if (mask[i] !== 'X') {
        binValue[i] = mask[i]
      }
    }

    addrs.add(index)
    mem[index] = parseInt(binValue.join(''), 2)
    return true
  }
})

// eslint-disable-next-line no-eval
eval(code)

console.log(sumMem(mem, addrs))
