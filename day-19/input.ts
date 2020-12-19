import { readFileSync } from 'fs'

const [rulesData, messagesData] = readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n\n')

const rulesJSON = rulesData
  .replace(/"/g, '')
  .replace(/(\d+): (.*)/g, '"$1":"$2"')
  .replace(/\n/g, ',')

export interface Rules {
  [key: string]: string
}

export const rules: Rules = JSON.parse(`{${rulesJSON}}`)
export const messages = messagesData.split('\n')
