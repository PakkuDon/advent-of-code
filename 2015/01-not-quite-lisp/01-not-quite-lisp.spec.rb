require_relative './01-not-quite-lisp'

describe NotQuiteLisp do
  context "when given string with equal number of open and close parens" do
    it "returns zero", :aggregate_failures do
      expect(described_class.call('(())')).to eq(0)
      expect(described_class.call('()()')).to eq(0)
    end
  end

  context "when given string with more open parens" do
    it "returns number greater than zero", :aggregate_failures do
      expect(described_class.call('(((')).to eq(3)
      expect(described_class.call('(()(()(')).to eq(3)
      expect(described_class.call('))(((((')).to eq(3)
    end
  end

  context "when given string with more close parens" do
    it "returns number less than zero", :aggregate_failures do
      expect(described_class.call('())')).to eq(-1)
      expect(described_class.call('))(')).to eq(-1)
      expect(described_class.call(')))')).to eq(-3)
      expect(described_class.call(')())())')).to eq(-3)
    end
  end
end
