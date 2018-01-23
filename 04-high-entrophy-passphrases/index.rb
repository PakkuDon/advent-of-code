require "./01-high-entrophy-passphrases"

puzzle_input = File.read("input.txt")
passphrases = puzzle_input.split("\n")

puts PassphraseValidator.count_valid_passphrases(passphrases)
