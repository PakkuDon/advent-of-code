const part1 = (input) => {
  const grid = input.trim().split("\n")
  const regions = []
  const visited = {}

  // Calculate area and perimeter for each plant type
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      // If tile already visited it has already been counted in a region
      if (visited[`${x},${y}`]) {
        continue
      }

      const plant = grid[y][x]
      const region = { area: 0, perimeter: 0 }
      const tiles = []
      const stack = []
      stack.push({ x, y })

      // Flood fill until we determine which tiles are in region
      while (stack.length > 0) {
        const current = stack.pop()
        // Skip nodes that we have already enqueued neighbouring tiles for
        if (visited[`${current.x},${current.y}`]) {
          continue
        }

        visited[`${current.x},${current.y}`] = true
        tiles.push({ tileX: current.x, tileY: current.y })
        stack.push(current)

        // Add neighbours if same plant type
        if (current.y > 0 && grid[current.y - 1][current.x] === plant) {
          stack.push({ x: current.x, y: current.y - 1 })
        }
        if (
          current.y < grid.length - 1 &&
          grid[current.y + 1][current.x] === plant
        ) {
          stack.push({ x: current.x, y: current.y + 1 })
        }
        if (current.x > 0 && grid[current.y][current.x - 1] === plant) {
          stack.push({ x: current.x - 1, y: current.y })
        }
        if (
          current.x < grid[0].length - 1 &&
          grid[current.y][current.x + 1] === plant
        ) {
          stack.push({ x: current.x + 1, y: current.y })
        }
      }

      // Calculate area and perimeter
      region.area = tiles.length
      tiles.forEach(({ tileX, tileY }) => {
        // Count top if at edge of region
        if ((grid[tileY - 1] || [])[tileX] !== plant) {
          region.perimeter++
        }
        // Count bottom if at edge of region
        if ((grid[tileY + 1] || [])[tileX] !== plant) {
          region.perimeter++
        }
        // Count left if at edge of region
        if (grid[tileY][tileX - 1] !== plant) {
          region.perimeter++
        }
        // Count right if at edge of region
        if (grid[tileY][tileX + 1] !== plant) {
          region.perimeter++
        }
      })

      regions.push(region)
    }
  }

  // Return sum of fence costs
  return regions.reduce(
    (total, region) => total + region.area * region.perimeter,
    0
  )
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
