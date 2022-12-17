const part1 = (jetPatterns) => {
  const width = 7
  // Arbitrary value to construct grid
  const height = 20000
  const grid = new Array(height)
    .fill()
    .map(() => new Array(width).fill().map(() => false))
  const shapes = [
    [["#", "#", "#", "#"]],
    [
      [".", "#", "."],
      ["#", "#", "#"],
      [".", "#", "."],
    ],
    [
      [".", ".", "#"],
      [".", ".", "#"],
      ["#", "#", "#"],
    ],
    [["#"], ["#"], ["#"], ["#"]],
    [
      ["#", "#"],
      ["#", "#"],
    ],
  ]

  let shapesSettled = 0
  let shapeIndex = 0
  let jetIndex = 0
  // Current tracks top-left of current shape and selected shape
  let current = { shape: shapes[shapeIndex], x: 2, y: 3 }
  let isDrop = false
  let maxY = 0
  while (shapesSettled < 2022) {
    if (isDrop) {
      let canDrop = true
      for (let y = 0; y < current.shape.length; y++) {
        for (let x = 0; x < current.shape[y].length; x++) {
          if (current.y - y <= 0) {
            canDrop = false
            break
          }
          if (
            current.shape[y][x] === "#" &&
            grid[current.y - y - 1][current.x + x]
          ) {
            canDrop = false
            break
          }
        }
        if (!canDrop) {
          break
        }
      }

      // If block can move down, move down one block
      if (canDrop) {
        current.y--
      }
      // Else, settle block and select new block
      else {
        for (let y = 0; y < current.shape.length; y++) {
          for (let x = 0; x < current.shape[y].length; x++) {
            if (current.shape[y][x] === "#") {
              grid[current.y - y][current.x + x] = true
            }
          }
        }
        shapeIndex = (shapeIndex + 1) % shapes.length
        current.shape = shapes[shapeIndex]
        if (current.y > maxY) {
          maxY = current.y
        }
        current.x = 2
        current.y = maxY + current.shape.length + 3
        shapesSettled++
      }
    } else {
      const jetPattern = jetPatterns[jetIndex]
      let shift
      if (jetPattern === "<") {
        shift = (x) => x - 1
      } else {
        shift = (x) => x + 1
      }

      let canShift = true
      for (let y = 0; y < current.shape.length; y++) {
        for (let x = 0; x < current.shape[y].length; x++) {
          if (shift(current.x + x) >= width || shift(current.x + x) < 0) {
            canShift = false
            break
          }
          if (
            current.shape[y][x] === "#" &&
            grid[current.y - y][shift(current.x + x)]
          ) {
            canShift = false
            break
          }
        }
        if (!canShift) {
          break
        }
      }

      if (canShift) {
        current.x = shift(current.x)
      }

      jetIndex = (jetIndex + 1) % jetPatterns.length
    }

    // Alternate between
    isDrop = !isDrop
  }
  return maxY + 1
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
