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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
