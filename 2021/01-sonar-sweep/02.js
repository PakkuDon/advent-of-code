const WINDOW_SIZE = 3
const countDepthIncreasesWithWindow = readings => {
    let windowSums = []
    let count = 0
    for (let i = 0; i < readings.length - WINDOW_SIZE + 1; i++) {
        let sum = 0
        for (let j = i; j < i + WINDOW_SIZE; j++) {
            sum += readings[j]
        }
        windowSums.push(sum)
    }

    for (let i = 1; i < windowSums.length; i++) {
        if (windowSums[i] > windowSums[i - 1]) {
            count++
        }
    }
    return count
}

module.exports = countDepthIncreasesWithWindow
