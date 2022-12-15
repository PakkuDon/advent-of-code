const calculateDistance = (p1, p2) =>
  Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
const part1 = (readings, y) => {
  const sensors = []
  const knownBeacons = []
  readings.forEach((reading) => {
    const [sensorX, sensorY, beaconX, beaconY] = reading
      .match(/\-?\d+/g)
      .map((value) => parseInt(value, 10))
    const sensor = { x: sensorX, y: sensorY }
    const beacon = { x: beaconX, y: beaconY }
    sensor.nearestBeacon = beacon
    sensor.distance = calculateDistance(sensor, beacon)

    sensors.push(sensor)
    knownBeacons.push(beacon)
  })

  let minX = Math.min(...sensors.map((sensor) => sensor.x - sensor.distance))
  let maxX = Math.max(...sensors.map((sensor) => sensor.x + sensor.distance))

  let count = 0
  for (let x = minX; x < maxX; x++) {
    if (knownBeacons.some((beacon) => beacon.x === x && beacon.y === y)) {
      continue
    }
    if (
      sensors.some(
        (sensor) => calculateDistance(sensor, { x, y }) <= sensor.distance
      )
    ) {
      count++
    }
  }
  return count
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
