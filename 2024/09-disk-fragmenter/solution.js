const part1 = (input) => {
  const disk = []

  // Parse disk map
  const diskMap = input
    .trim()
    .split("")
    .map((value) => Number(value))
  let isFile = true
  let idNumber = 0

  for (let i = 0; i < diskMap.length; i++) {
    if (isFile) {
      for (let j = 0; j < diskMap[i]; j++) {
        disk.push(idNumber)
      }
      idNumber++
    } else {
      for (let j = 0; j < diskMap[i]; j++) {
        disk.push(".")
      }
    }

    isFile = !isFile
  }

  // Fill free-spaces with file blocks
  for (let i = 0; i < disk.length; i++) {
    if (disk[i] === ".") {
      const indexToSwapWith = disk.findLastIndex((value) => value !== ".")
      if (i > indexToSwapWith) {
        break
      }

      ;[disk[indexToSwapWith], disk[i]] = [disk[i], disk[indexToSwapWith]]
    }
  }

  // Calculate checksum
  let checksum = 0
  for (let i = 0; i < disk.length; i++) {
    if (disk[i] === ".") {
      break
    }

    checksum += disk[i] * i
  }

  return checksum
}

const part2 = (input) => {
  const disk = []

  // Parse disk map
  const diskMap = input
    .trim()
    .split("")
    .map((value) => Number(value))
  let isFile = true
  let idNumber = 0
  const files = {}

  for (let i = 0; i < diskMap.length; i++) {
    if (isFile) {
      files[idNumber] = {
        index: disk.length,
        length: diskMap[i],
      }

      for (let j = 0; j < diskMap[i]; j++) {
        disk.push(idNumber)
      }
      idNumber++
    } else {
      for (let j = 0; j < diskMap[i]; j++) {
        disk.push(".")
      }
    }

    isFile = !isFile
  }

  // Fill free-spaces with file blocks
  const idNumbers = Object.keys(files)
    .map((value) => Number(value))
    .toSorted((a, b) => (a > b ? -1 : 1))

  idNumbers.forEach((idNumber) => {
    // Find free space that fits current file block
    for (let i = 0; i < disk.length; i++) {
      // Break early if disk is as far left as it can go
      if (i > files[idNumber].index) {
        break
      }

      // If current index can fit file block, move file block
      let nextCells = disk.slice(i, i + files[idNumber].length).join("")
      if (nextCells === ".".repeat(files[idNumber].length)) {
        for (let j = 0; j < files[idNumber].length; j++) {
          ;[disk[files[idNumber].index + j], disk[i + j]] = [
            disk[i + j],
            disk[files[idNumber].index + j],
          ]
        }

        // Update start point of swapped value
        files[idNumber].index = i
        break
      }
    }
  })

  // Calculate checksum
  let checksum = 0
  for (let i = 0; i < disk.length; i++) {
    if (disk[i] !== ".") {
      checksum += disk[i] * i
    }
  }

  return checksum
}

module.exports = {
  part1,
  part2,
}
