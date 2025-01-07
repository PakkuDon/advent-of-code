const isPair = (substring) => {
  // Check that substring contains 2 different characters
  if (new Set(substring).size !== 2) {
    return false
  }
  // Check if substring is mirrored
  const [a, b] = [substring.slice(0, 2), substring.slice(2)]
  return a === b.split("").reverse().join("")
}

const part1 = (input) => {
  const addresses = input.trim().split("\n")

  const tlsAddresses = addresses.filter((address) => {
    const segments = address.split(/(\[\w+\])/)

    const segmentsInsideBrackets = segments.filter((segment) =>
      segment.startsWith("[")
    )
    const segmentsOutsideBrackets = segments.filter(
      (segment) => !segment.startsWith("[")
    )

    // Reject addresses with mirrored 4-length string inside brackets
    for (let i = 0; i < segmentsInsideBrackets.length; i++) {
      const segment = segmentsInsideBrackets[i]
      for (let i = 0; i <= segment.length - 4; i++) {
        const substring = segment.slice(i, i + 4)
        if (isPair(substring)) {
          return false
        }
      }
    }

    // Approve addresses with mirrored 4-length string outside brackets
    for (let i = 0; i < segmentsOutsideBrackets.length; i++) {
      const segment = segmentsOutsideBrackets[i]
      for (let i = 0; i <= segment.length - 4; i++) {
        const substring = segment.slice(i, i + 4)
        if (isPair(substring)) {
          return true
        }
      }
    }

    return false
  })

  return tlsAddresses.length
}

const isAreaBroadcastAccessor = (substring) => {
  // Check that substring contains 2 different characters
  if (new Set(substring).size !== 2) {
    return false
  }

  // Check that outer characters are the same
  return substring[0] === substring[2]
}

const part2 = (input) => {
  const addresses = input.trim().split("\n")

  const sslAddresses = addresses.filter((address) => {
    const segments = address.split(/(\[\w+\])/)

    const segmentsInsideBrackets = segments.filter((segment) =>
      segment.startsWith("[")
    )
    const segmentsOutsideBrackets = segments.filter(
      (segment) => !segment.startsWith("[")
    )

    // Approve addresses that contain an area-broadcast accessor
    // and corresponding byte allocation block
    for (let i = 0; i < segmentsOutsideBrackets.length; i++) {
      const segment = segmentsOutsideBrackets[i]
      for (let i = 0; i <= segment.length - 3; i++) {
        const substring = segment.slice(i, i + 3)
        // If area-broadcast accessor found, check if byte allocation block exists
        if (isAreaBroadcastAccessor(substring)) {
          const bab = `${substring[1]}${substring[0]}${substring[1]}`
          if (segmentsInsideBrackets.some((segment) => segment.includes(bab))) {
            return true
          }
        }
      }
    }

    return false
  })

  return sslAddresses.length
}

module.exports = {
  part1,
  part2,
}
