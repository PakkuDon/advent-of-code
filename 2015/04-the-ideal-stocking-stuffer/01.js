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

module.exports = findLowestNumberForKey
