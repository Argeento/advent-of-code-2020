import policies from './policies'

const validPolices = policies.filter(policy => {
  const { min, max, letter, password } = policy
  const isFirstPositionValid = password[min - 1] === letter
  const isSecondPositionValid = password[max - 1] === letter

  return isFirstPositionValid !== isSecondPositionValid
})

console.log(validPolices.length)
