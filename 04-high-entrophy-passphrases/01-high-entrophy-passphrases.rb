class PassphraseValidator
  class << self
    def valid?(passphrase)
      words = passphrase.split
      return words.length == words.uniq.length
    end

    def count_valid_passphrases(passphrases)
      passphrases.count { |passphrase| valid?(passphrase) }
    end
  end
end
