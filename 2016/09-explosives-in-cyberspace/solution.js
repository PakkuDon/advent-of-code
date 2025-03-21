const part1 = (input) => {
  const source = input.trim()
  let decompressed = ""

  // Decompress string
  for (let i = 0; i < source.length; i++) {
    if (source[i] === "(") {
      // Find closing bracket - Basis for next index to inspect from
      const endMarkerIndex = source.indexOf(")", i)

      // Parse marker
      const marker = source.substring(i + 1, endMarkerIndex)
      const [selectionLength, repeatCount] = marker
        .match(/\d+/g)
        .map((value) => Number(value))

      // Append decompressed sequence to result
      decompressed += source
        .substring(endMarkerIndex + 1, endMarkerIndex + selectionLength + 1)
        .repeat(repeatCount)

      // Update index to skip past marker and decompressed substring
      i += marker.length + selectionLength + 1
    } else {
      // Otherwise append current char to result
      decompressed += source[i]
    }
  }

  return decompressed.length
}

// Return number of characters in decompressed string
// Recurse to expand subsequences
const getRecursivelyDecompressedLength = (source) => {
  let length = 0

  for (let i = 0; i < source.length; i++) {
    if (source[i] === "(") {
      // Find closing bracket - Basis for next index to inspect from
      const endMarkerIndex = source.indexOf(")", i)

      // Parse marker
      const marker = source.substring(i + 1, endMarkerIndex)
      const [selectionLength, repeatCount] = marker
        .match(/\d+/g)
        .map((value) => Number(value))
      const substring = source.substring(
        endMarkerIndex + 1,
        endMarkerIndex + 1 + selectionLength
      )

      // Calculcate decompressed length of subsequence
      length += getRecursivelyDecompressedLength(substring) * repeatCount

      // Update index to skip past marker and decompressed substring
      i += marker.length + selectionLength + 1
    } else {
      // Otherwise append current char to result
      length++
    }
  }

  return length
}

const part2 = (input) => {
  return getRecursivelyDecompressedLength(input.trim())
}

module.exports = {
  part1,
  part2,
}
