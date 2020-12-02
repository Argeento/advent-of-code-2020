import { getLinesFromFile } from '../utils'

const lines = getLinesFromFile(`${__dirname}/input.txt`)

interface IPolicy {
  min: number,
  max: number,
  letter: string,
  password: string
}

const policies: IPolicy[] = lines.map(line => {
  const match = line.match(/^(?<min>\d+)-(?<max>\d+) (?<letter>.): (?<password>.*)$/)
  const { max, min, letter, password } = match.groups

  return {
    min: parseInt(min),
    max: parseInt(max),
    letter,
    password
  }
})

export default policies
