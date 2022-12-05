const isNiceString = (string) => {
  return (
    hasRepeatingNonOverlappingPair(string) && hasRepeatingLetterWithGap(string)
  )
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

module.exports = isNiceString
