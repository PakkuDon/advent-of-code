require_relative "./02-high-entrophy-passphrases"

describe PassphraseValidator do
  describe ".valid?" do
    context "when given passphrase where no words are anagrams of another" do
      it "returns true" do
        passphrase = "abcde fghij"
        expect(PassphraseValidator.valid?(passphrase)).to eq(true)
      end
    end

    context "when given passphrase where words are subsets but not anagrams of another" do
      it "returns true" do
        passphrase = "a ab abc abd abf abj"
        expect(PassphraseValidator.valid?(passphrase)).to eq(true)
      end
    end

    context "when given passphrase with words that are anagrams of another" do
      it "returns false" do
        passphrase = "oiii ioii iioi iiio"
        expect(PassphraseValidator.valid?(passphrase)).to eq(false)
      end
    end
  end

  describe ".count_valid_passphrases" do
    it "counts the number of valid passphrases" do
      passphrases = [
        "abcde fghij",
        "abcde xyz ecdab",
        "a ab abc abd abf abj",
        "iiii oiii ooii oooi oooo",
        "oiii ioii iioi iiio",
      ]
      expect(PassphraseValidator.count_valid_passphrases(passphrases)).to eq(3)
    end
  end
end
