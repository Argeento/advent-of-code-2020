import { passports } from './passports'

function inRange(min: number, value: number, max: number): boolean {
  return value >= min && value <= max
}

const requirements = [
  {
    key: 'byr',
    validate(value: string) {
      return inRange(1920, +value, 2002)
    }
  },
  {
    key: 'iyr',
    validate(value: string) {
      return inRange(2010, +value, 2020)
    }
  },
  {
    key: 'eyr',
    validate(value: string) {
      return inRange(2020, +value, 2030)
    }
  },
  {
    key: 'hgt',
    validate(value: string = '') {
      const [, height, unitName] = value.match(/^(\d*)(\w*)$/)

      if (unitName === 'cm') {
        return inRange(150, +height, 193)
      } else if (unitName === 'in') {
        return inRange(59, +height, 76)
      }

      return false
    }
  },
  {
    key: 'hcl',
    validate(value: string = '') {
      return value.match(/^#[0-9a-f]{6}$/)
    }
  },
  {
    key: 'ecl',
    validate(value: string) {
      const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
      return validEyeColors.includes(value)
    }
  },
  {
    key: 'pid',
    validate(value: string = '') {
      return value.match(/^\d{9}$/)
    }
  }
]

const validPasspotrs = passports.filter(passport => {
  return requirements.every(requirement => {
    const value = passport[requirement.key]
    return requirement.validate(value)
  })
})

console.log(validPasspotrs.length)
