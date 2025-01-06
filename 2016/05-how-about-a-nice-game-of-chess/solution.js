const crypto = require("crypto")

const part1 = (input) => {
  let password = ""
  let i = 0

  // Generate password using md5 hash of input and a number
  while (password.length < 8) {
    const hash = crypto.createHash("md5").update(`${input}${i}`).digest("hex")

    if (hash.startsWith("00000")) {
      password += hash[5]
    }

    i++
  }

  return password
}

const part2 = (input) => {
  let password = Array(8).fill("_")
  let i = 0

  // Generate password using md5 hash of input and a number
  while (password.some((char) => char === "_")) {
    const hash = crypto.createHash("md5").update(`${input}${i}`).digest("hex")

    if (hash.startsWith("00000")) {
      const positionString = hash[5]
      const position = Number(positionString)
      // Only record character if position is within password length
      // and value has not yet recorded for given position
      if (position <= 7 && password[position] === "_") {
        password[position] = hash[6]
      }
    }

    i++
  }

  return password.join("")
}

module.exports = {
  part1,
  part2,
}
