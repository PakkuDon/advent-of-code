require './01-inventory-management-system'

puzzle_input = File.read('./input.txt').strip.split("\n")
puts InventoryManagementSystem.call(puzzle_input)
