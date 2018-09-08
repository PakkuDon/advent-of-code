require './anagram'

class PassphraseValidator
  class << self
    def valid?(passphrase)
      words = passphrase.split

      words.each_with_index do |word, i|
        words.each_with_index do |current_word, j|
          next if i == j
          return false if Anagram.anagram?(word, current_word)
        end
      end

      true
    end

    def count_valid_passphrases(passphrases)
      passphrases.count { |passphrase| valid?(passphrase) }
    end
  end
end
