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

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
