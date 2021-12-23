const calculateLifeSupportRating = (input) => {
    let oxygenGeneratorRating = calculateOxygenGeneratorRating(input)
    let co2ScrubberRating = calculateCO2ScrubberRating(input)

    return oxygenGeneratorRating * co2ScrubberRating
}

const calculateOxygenGeneratorRating = input => {
    let instructions = input.slice()
    let position = 0

    while (instructions.length > 1) {
        const tally = getCountAtPosition(instructions, position)
        if (tally['0'] > tally['1']) {
            instructions = instructions.filter(instruction => instruction[position] === '0')
        }
        else {
            instructions = instructions.filter(instruction => instruction[position] === '1')
        }

        position++
    }

    return parseInt(instructions[0], 2)
}

const calculateCO2ScrubberRating = input => {
    let instructions = input.slice()
    let position = 0

    while (instructions.length > 1) {
        const tally = getCountAtPosition(instructions, position)
        if (tally['1'] >= tally['0']) {
            instructions = instructions.filter(instruction => instruction[position] === '0')
        }
        else {
            instructions = instructions.filter(instruction => instruction[position] === '1')
        }

        position++
    }

    return parseInt(instructions[0], 2)
}

const getCountAtPosition = (matrix, position) => {
    const tally = {}

    matrix.forEach(row => {
        let value = row[position]
        if (tally[value]) {
            tally[value]++
        }
        else {
            tally[value] = 1
        }
    })

    return tally
}

module.exports = calculateLifeSupportRating
