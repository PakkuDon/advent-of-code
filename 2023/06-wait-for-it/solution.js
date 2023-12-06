const part1 = (input) => {
  const rows = input.trim().split("\n")
  const times = rows[0].match(/\d+/g).map((value) => parseInt(value, 10))
  const distances = rows[1].match(/\d+/g).map((value) => parseInt(value, 10))
  let counts = []

  for (let i = 0; i < times.length; i++) {
    let [time, distance] = [times[i], distances[i]]

    let count = 0
    for (let speed = 1; speed < time; speed++) {
      if ((time - speed) * speed > distance) {
        count++
      }
    }
    counts.push(count)
  }

  return counts.reduce((total, current) => total * current, 1)
}

const part2 = (input) => {
  const rows = input.trim().split("\n")
  const time = parseInt(rows[0].match(/\d+/g).join(""), 10)
  const distance = parseInt(rows[1].match(/\d+/g).join(""), 10)
  let count = 0

  for (let speed = 1; speed < time; speed++) {
    if ((time - speed) * speed > distance) {
      count++
    }
  }

  return count
}

module.exports = {
  part1,
  part2,
}
