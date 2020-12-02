import policies from './policies'
 
const validPolices = policies.filter(policy => {
  const { min, max, letter, password } = policy
  const policyLetters = [...password].filter(pdwLetter => pdwLetter === letter)

  return (policyLetters.length >= min) && (policyLetters.length <= max)
})

console.log(validPolices.length)
