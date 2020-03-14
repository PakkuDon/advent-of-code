const isNiceString = (string) => {
  return hasThreeVowels(string)
    && hasDoubleLetter(string)
    && doesNotContainSubstrings(string, ['ab', 'cd', 'pq', 'xy'])
}

const hasThreeVowels = (string) => (
  (string.match(/[aeiou]/g) || []).length >= 3
)

const hasDoubleLetter = (string) => {
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      return true
    }
  }
  return false
}

const doesNotContainSubstrings = (string, substrings) => {
  for (let substring of substrings) {
    if (string.includes(substring)) {
      return false
    }
  }
  return true
}

module.exports = isNiceString
