require './01-inventory-management-system'

describe InventoryManagementSystem do
  it 'calculates checksum for a set of box IDs' do
    box_ids = [
      'abcdef',
      'bababc',
      'abbcde',
      'abcccd',
      'aabcdd',
      'abcdee',
      'ababab',
    ]

    expect(described_class.call(box_ids)).to eq(12)
  end
end
