var crypto = require('crypto')

const HASH_PREFIX = '000000'

const findLowestNumberForKey = (secretKey) => {
  let number = 0
  let hash = crypto.createHash('md5').update(secretKey + number).digest('hex')

  while (!hash.startsWith(HASH_PREFIX)) {
    number++
    hash = crypto.createHash('md5').update(secretKey + number).digest('hex')
  }

  return number
}

module.exports = findLowestNumberForKey
