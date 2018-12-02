require './02-inventory-management-system'

describe InventoryManagementSystem do
  it 'returns the characters shared by the two correct box IDs' do
    box_ids = [
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'fguij',
      'axcye',
      'wvxyz',
    ]

    expect(described_class.call(box_ids)).to eq('fgij')
  end
end
