# require_relative "./01-high-entrophy-passphrases"
require_relative "./02-high-entrophy-passphrases"

puzzle_input = File.read("input.txt")
passphrases = puzzle_input.split("\n")

puts PassphraseValidator.count_valid_passphrases(passphrases)
