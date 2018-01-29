function takeANumber(customerQueue, customer) {
  customerQueue.push(customer)
  return `Welcome, ${customer}. You are number ${customerQueue.length} in line.`
}

function nowServing(customerQueue) {
  return customerQueue.length ? `Currently serving ${customerQueue.shift()}.` : "There is nobody waiting to be served!"
}

function currentLine(customerQueue) {
  let customerOrder = customerQueue.length ? ':' : ''

  if (customerQueue.length) {
    let number = 1;

    while (customerQueue.length) {
      customerOrder += ` ${number}. ${customerQueue.shift()}${customerQueue.length ? ',' : ''}`
      number++
    }
  }

  return `The line is currently${customerOrder.length ? customerOrder : ' empty.'}`
}
