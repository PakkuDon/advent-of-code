const hasThreeVowels = (string) => (string.match(/[aeiou]/g) || []).length >= 3

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

const part1 = (input) => {
  return input
    .trim()
    .split("\n")
    .filter(
      (string) =>
        hasThreeVowels(string) &&
        hasDoubleLetter(string) &&
        doesNotContainSubstrings(string, ["ab", "cd", "pq", "xy"])
    ).length
}

const hasRepeatingNonOverlappingPair = (string) => {
  if (string.length <= 1) {
    return false
  }

  for (let index = 0; index < string.length - 1; index++) {
    const substring = string.substring(index, index + 2)
    const lastIndexOfSubstring = string.lastIndexOf(substring)

    if (lastIndexOfSubstring - index > 1) {
      return true
    }
  }

  return false
}

const hasRepeatingLetterWithGap = (string) => {
  if (string.length <= 3) {
    return false
  }

  for (let index = 2; index < string.length; index++) {
    if (
      string[index] === string[index - 2] &&
      string[index] !== string[index - 1]
    ) {
      return true
    }
  }

  return false
}

const part2 = (input) => {
  return input
    .trim()
    .split("\n")
    .filter(
      (string) =>
        hasRepeatingNonOverlappingPair(string) &&
        hasRepeatingLetterWithGap(string)
    ).length
}

module.exports = {
  part1,
  part2,
}
