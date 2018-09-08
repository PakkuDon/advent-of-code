require "./01-high-entrophy-passphrases"

describe PassphraseValidator do
  describe ".valid?" do
    context "when given passphrase with no duplicate words" do
      it "returns true" do
        passphrase = "aa bb cc dd ee"
        expect(PassphraseValidator.valid?(passphrase)).to eq(true)
      end
    end

    context "when given passphrase with duplicate words" do
      it "returns false" do
        passphrase = "aa bb cc dd aa"
        expect(PassphraseValidator.valid?(passphrase)).to eq(false)
      end
    end
  end

  describe ".count_valid_passphrases" do
    it "counts the number of valid passphrases" do
      passphrases = [
        "aa bb cc dd ee",
        "aa bb cc dd aa",
        "aa bb cc dd aaa",
      ]
      expect(PassphraseValidator.count_valid_passphrases(passphrases)).to eq(2)
    end
  end
end
