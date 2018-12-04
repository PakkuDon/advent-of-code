const fs = require('fs')
const proseRecordPart1 = require('./01-repose-record')

const puzzleInput = fs.readFileSync('./input.txt', 'utf8').trim().split('\n')
console.log(proseRecordPart1.checkSum(puzzleInput))
