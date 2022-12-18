const floodFill = (grid, x, y, z) => {
  const gridDepth = grid.length
  const gridHeight = grid[0].length
  const gridWidth = grid[0][0].length
  let floodedGrid = new Array(gridDepth)
    .fill()
    .map(() =>
      new Array(gridHeight)
        .fill()
        .map(() => new Array(gridWidth).fill().map(() => false))
    )
  const queue = []
  queue.push({ x, y, z })
  const seen = new Set()

  while (queue.length) {
    let { x, y, z } = queue.shift()

    if (seen.has(`${x},${y},${z}`)) {
      continue
    }
    seen.add(`${x},${y},${z}`)

    if (x + 1 < gridWidth && !grid[z][y][x + 1]) {
      floodedGrid[z][y][x + 1] = true
      queue.push({ z, y, x: x + 1 })
    }
    if (x - 1 >= 0 && !grid[z][y][x - 1]) {
      floodedGrid[z][y][x - 1] = true
      queue.push({ z, y, x: x - 1 })
    }

    if (y + 1 < gridHeight && !grid[z][y + 1][x]) {
      floodedGrid[z][y + 1][x] = true
      queue.push({ z, y: y + 1, x })
    }
    if (y - 1 >= 0 && !grid[z][y - 1][x]) {
      floodedGrid[z][y - 1][x] = true
      queue.push({ z, y: y - 1, x })
    }

    if (z + 1 < gridDepth && !grid[z + 1][y][x]) {
      floodedGrid[z + 1][y][x] = true
      queue.push({ z: z + 1, y, x })
    }
    if (z - 1 >= 0 && !grid[z - 1][y][x]) {
      floodedGrid[z - 1][y][x] = true
      queue.push({ z: z - 1, y, x })
    }
  }

  return floodedGrid
}

const part1 = (scanResults) => {
  const cubes = scanResults.map((row) => {
    const [x, y, z] = row.split(",").map((value) => parseInt(value))

    return { x, y, z }
  })

  cubes.forEach((cube, outerIndex) => {
    const neighbours = cubes.filter((anotherCube, innerIndex) => {
      if (outerIndex === innerIndex) {
        return false
      }
      if (Math.abs(cube.x - anotherCube.x) === 1) {
        return cube.y === anotherCube.y && cube.z === anotherCube.z
      } else if (Math.abs(cube.y - anotherCube.y) === 1) {
        return cube.x === anotherCube.x && cube.z === anotherCube.z
      } else if (Math.abs(cube.z - anotherCube.z) === 1) {
        return cube.y === anotherCube.y && cube.x === anotherCube.x
      }
    })
    cube.neighbours = neighbours
  })

  return cubes.reduce((total, cube) => {
    return total + (6 - cube.neighbours.length)
  }, 0)
}

const part2 = (scanResults) => {
  const cubes = scanResults.map((row) => {
    const [x, y, z] = row.split(",").map((value) => parseInt(value))

    return { x, y, z }
  })

  cubes.forEach((cube, outerIndex) => {
    const neighbours = cubes.filter((anotherCube, innerIndex) => {
      if (outerIndex === innerIndex) {
        return false
      }
      if (Math.abs(cube.x - anotherCube.x) === 1) {
        return cube.y === anotherCube.y && cube.z === anotherCube.z
      } else if (Math.abs(cube.y - anotherCube.y) === 1) {
        return cube.x === anotherCube.x && cube.z === anotherCube.z
      } else if (Math.abs(cube.z - anotherCube.z) === 1) {
        return cube.y === anotherCube.y && cube.x === anotherCube.x
      }
    })
    cube.neighbours = neighbours
  })

  // Place cubes in grid
  const gridDepth = Math.max(...cubes.map((cube) => cube.z)) + 5
  const gridHeight = Math.max(...cubes.map((cube) => cube.y)) + 5
  const gridWidth = Math.max(...cubes.map((cube) => cube.x)) + 5
  const grid = new Array(gridDepth)
    .fill()
    .map(() =>
      new Array(gridHeight).fill().map(() => new Array(gridWidth).fill())
    )

  cubes.forEach((cube) => {
    const { x, y, z } = cube
    grid[z][y][x] = cube
  })

  let floodedGrid = floodFill(
    grid,
    gridDepth - 1,
    gridHeight - 1,
    gridWidth - 1
  )

  return cubes.reduce((total, cube) => {
    const potentialNeighbours = [
      { x: cube.x + 1, y: cube.y, z: cube.z },
      { x: cube.x - 1, y: cube.y, z: cube.z },
      { x: cube.x, y: cube.y + 1, z: cube.z },
      { x: cube.x, y: cube.y - 1, z: cube.z },
      { x: cube.x, y: cube.y, z: cube.z + 1 },
      { x: cube.x, y: cube.y, z: cube.z - 1 },
    ].filter(
      (neighbour) =>
        neighbour.x >= 0 &&
        neighbour.x < gridWidth &&
        neighbour.y >= 0 &&
        neighbour.y < gridHeight &&
        neighbour.z >= 0 &&
        neighbour.z < gridDepth
    )

    // Add side if it has been touched by water
    // Edges that are at the boundary of the grid are assumed to be visible
    return (
      total +
      potentialNeighbours.filter(
        ({ x, y, z }) => !grid[z][y][x] && floodedGrid[z][y][x]
      ).length +
      Object.values(cube).filter((value) => value === 0).length
    )
  }, 0)
}

module.exports = {
  part1,
  part2,
}
