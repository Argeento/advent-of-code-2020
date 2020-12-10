import { passports } from './passports'

const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const validPasspotrs = passports.filter(passport => {
  return requiredKeys.every(key => key in passport)
})

console.log(validPasspotrs.length)
