var crypto = require("crypto")

// Hash is a key if it contains a triple and if any of the
// next 1000 hashes include same characters 5 times in a row
const isKey = (hash, salt, index, shouldStretchKey) => {
  if (shouldStretchKey) {
    hash = stretchKey(hash)
  }

  if (hash.match(/(\w)\1\1/g)) {
    const char = hash.match(/(\w)\1\1/g)[0][0]

    for (let i = 1; i <= 1000; i++) {
      let nextHash = crypto
        .createHash("md5")
        .update(salt + (index + i))
        .digest("hex")

      if (shouldStretchKey) {
        nextHash = stretchKey(nextHash)
      }

      if (nextHash.includes(char.repeat(5))) {
        return true
      }
    }
  }
  return false
}

const part1 = (input) => {
  const salt = input.trim()
  let index = 0
  let keyCount = 0
  let hash = ""

  while (keyCount < 64) {
    hash = crypto
      .createHash("md5")
      .update(salt + index)
      .digest("hex")

    if (isKey(hash, salt, index)) {
      keyCount++
    }

    index++
  }

  // Subtract 1 to account for increment on final iteration
  return index - 1
}

const stretchKey = (hash) => {
  let newHash = hash

  for (let i = 0; i < 2016; i++) {
    newHash = crypto.createHash("md5").update(newHash).digest("hex")
  }

  return newHash
}

const part2 = (input) => {
  const salt = input.trim()
  let index = 0
  let keyCount = 0

  while (keyCount < 64) {
    const hash = crypto
      .createHash("md5")
      .update(salt + index)
      .digest("hex")

    if (isKey(hash, salt, index, true)) {
      keyCount++
    }

    index++
  }

  // Subtract 1 to account for increment on final iteration
  return index - 1
}

module.exports = {
  part1,
  part2,
}
