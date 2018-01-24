require './anagram'

describe Anagram do
  describe "anagram?" do
    context "when given two anagrams" do
      it "returns true" do
        wordA = "ioii"
        wordB = "oiii"
        expect(Anagram.anagram?(wordA, wordB)).to eq(true)
      end
    end

    context "when given two words that aren't anagrams" do
      it "returns false" do
        wordA = "abc"
        wordB = "def"
        expect(Anagram.anagram?(wordA, wordB)).to eq(false)
      end
    end
  end
end
