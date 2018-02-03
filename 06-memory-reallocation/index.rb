require "./01-memory-reallocation"

puzzle_input = File.read("input.txt")
memory_banks = puzzle_input.split(/\s+/).map(&:to_i)

puts MemoryReallocation.call(memory_banks)
