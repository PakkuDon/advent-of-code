const incrementPassword = (password) => {
  const charCodes = password.split("").map((char) => char.charCodeAt(0))

  // Increment code for last character
  charCodes[charCodes.length - 1]++

  // If any characters outside valid charcodes
  // increment previous character and reset all chars to right to "a"
  while (charCodes.some((code) => code > "z".charCodeAt(0))) {
    const index = charCodes.findLastIndex((value) => value > "z".charCodeAt(0))
    for (let i = index; i < charCodes.length; i++) {
      charCodes[i] = "a".charCodeAt(0)
    }
    charCodes[index - 1]++
  }

  return String.fromCharCode(...charCodes)
}

const isValidPassword = (password) => {
  // Reject password if it does not have three ascending letters
  if (
    !password.split("").some((_, index) => {
      if (index < 2) {
        return false
      }
      const [a, b, c] = [
        password[index - 2],
        password[index - 1],
        password[index],
      ].map((char) => char.charCodeAt(0))
      return c - b === 1 && b - a === 1
    })
  ) {
    return false
  }

  // Reject password if it contains letters letters i, o, or l
  if (password.match(/[iol]/)) {
    return false
  }

  // Reject password if it does not contain two adjacent matching letters
  if (new Set(password.match(/([a-z])\1/g) || []).size < 2) {
    return false
  }

  return true
}

const part1 = (input) => {
  let password = input.trim()

  // Generate passwords by incrementing password until next valid password
  while (!isValidPassword(password)) {
    password = incrementPassword(password)
  }

  return password
}

const part2 = (input) => {
  // Get answer from part 1
  let password = part1(input)

  // Increment password as part 1 password has expired
  password = incrementPassword(password)

  // Generate passwords by incrementing password until next valid password
  while (!isValidPassword(password)) {
    password = incrementPassword(password)
  }

  return password
}

module.exports = {
  part1,
  part2,
}
