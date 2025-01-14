const part1 = (input) => {
  const requiredPresents = Number(input)
  let houseNo = 1

  while (true) {
    let presents = 0
    for (let i = 1; i <= houseNo; i++) {
      if (houseNo % i === 0) {
        presents += i * 10
      }
    }

    if (presents >= requiredPresents) {
      break
    }
    houseNo++
  }

  return houseNo
}

const part2 = (input) => {
  const requiredPresents = Number(input)
  let houseNo = 1

  while (true) {
    let presents = 0
    for (let i = 1; i <= houseNo; i++) {
      if (houseNo % i === 0 && houseNo <= i * 50) {
        presents += i * 11
      }
    }

    if (presents >= requiredPresents) {
      break
    }
    houseNo++
  }

  return houseNo
}

module.exports = {
  part1,
  part2,
}
