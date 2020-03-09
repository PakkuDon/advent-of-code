require_relative "./02-corruption-checksum"

puzzle_input = File.read("input.txt")
spreadsheet = puzzle_input.split("\n").map { |row| row.split(/\s+/).map(&:to_i) }

puts CorruptionChecksum.call(spreadsheet)
