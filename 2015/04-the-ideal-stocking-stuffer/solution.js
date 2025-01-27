var crypto = require("crypto")

const findLowestNumberForKey = (secretKey, hashPrefix) => {
  let number = 0
  let hash = crypto
    .createHash("md5")
    .update(secretKey + number)
    .digest("hex")

  while (!hash.startsWith(hashPrefix)) {
    number++
    hash = crypto
      .createHash("md5")
      .update(secretKey + number)
      .digest("hex")
  }

  return number
}

const part1 = (input) => {
  return findLowestNumberForKey(input, "00000")
}

const part2 = (input) => {
  return findLowestNumberForKey(input, "000000")
}

module.exports = {
  part1,
  part2,
}
