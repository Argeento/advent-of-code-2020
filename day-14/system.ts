import { add, getLinesFromFile } from '../utils'
export const code = getLinesFromFile(`${__dirname}/input.txt`)
  .map(line => line.replace(/mask = (.*)$/, `mask = '$1'`))
  .join('\n')

export function sumMem(mem: number[], addrs: Set<number>): number {
  return [...addrs.values()].map(addr => mem[addr]).reduce(add)
}
