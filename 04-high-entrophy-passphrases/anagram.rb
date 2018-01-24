class Anagram
  class << self
    def anagram?(wordA, wordB)
      get_character_tally(wordA) == get_character_tally(wordB)
    end

    def get_character_tally(word)
      word.chars.each_with_object(Hash.new(0)) do |char, tally|
        tally[char] += 1
      end
    end
  end
end
