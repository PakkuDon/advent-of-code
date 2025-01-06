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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
