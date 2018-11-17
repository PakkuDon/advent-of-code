require_relative './02-not-quite-lisp'

describe NotQuiteLisp do
  describe "returns position of character that causes user to enter basement" do
    example ") returns one" do
      expect(described_class.call(')')).to eq(1)
    end

    example "()()) returns 5" do
      expect(described_class.call('()())')).to eq(5)
    end
  end
end
