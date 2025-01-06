const part1 = (input) => {
  // Parse input
  const rooms = input
    .trim()
    .split("\n")
    .map((row) => {
      const [_, name, sectorId, checksum] = row.match(
        /([a-z-]+)-(\d+)\[([a-z]+)\]/
      )

      return {
        name,
        sectorId: Number(sectorId),
        checksum,
      }
    })

  // Find valid rooms
  const validRooms = rooms.filter((room) => {
    // Count occurrences of each character in room's name
    const tally = {}

    for (let char of room.name) {
      if (char !== "-") {
        tally[char] = (tally[char] || 0) + 1
      }
    }

    // Find most-frequent characters in room name. Ties broken by alphabetization
    const mostFrequentChars = Object.keys(tally)
      .sort((a, b) => {
        if (tally[a] === tally[b]) {
          return a.localeCompare(b)
        }
        if (tally[a] < tally[b]) {
          return 1
        }
        return -1
      })
      .slice(0, 5)

    // Check if checksum is equal to top-5 most frequent characters in room name
    return room.checksum === mostFrequentChars.join("")
  })

  // Return sum of valid rooms' sector IDs
  return validRooms.reduce((total, room) => total + room.sectorId, 0)
}

const part2 = (input) => {
  // Parse input
  const rooms = input
    .trim()
    .split("\n")
    .map((row) => {
      const [_, name, sectorId, checksum] = row.match(
        /([a-z-]+)-(\d+)(\[([a-z]+)\])?/
      )

      return {
        name,
        sectorId: Number(sectorId),
        checksum,
      }
    })

  // Decrypt names for each room
  const decryptedNames = rooms.map((room) => {
    let decryptedName = ""

    for (let char of room.name) {
      if (char === "-") {
        decryptedName += " "
      } else {
        const baseCharCode = char.charCodeAt(0) - "a".charCodeAt(0)
        const newCharCode = (baseCharCode + room.sectorId) % 26

        decryptedName += String.fromCharCode(newCharCode + "a".charCodeAt(0))
      }
    }

    return `${decryptedName} ${room.sectorId}`
  })

  return decryptedNames.join("\n")
}

module.exports = {
  part1,
  part2,
}
