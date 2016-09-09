// Translated into JS
function getNumber(quese) {
  quese.push(quese.length + 1);

}

// Ruby
it "adds newest customer to the end of the queue" do
queue = []
get_a_number(queue)
expect(queue).to eq([1])

get_a_number(queue)
expect(queue).to eq([1,2])
end
