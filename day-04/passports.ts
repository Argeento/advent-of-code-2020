import { readFileSync } from 'fs'

const data = readFileSync(`${__dirname}/input.txt`).toString()

export const passports = data.split('\n\n').map(passportData => {
  const passportEntries = passportData
    .replace(/\n/g, ' ')
    .split(' ')
    .map(line => line.split(':'))

  const passport = passportEntries.reduce((passport, [key, value]) => {
    passport[key] = value
    return passport
  }, {})

  return passport
})
