var katzDeli = [];

function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.indexOf(customer) + 1} in line.`
}

function nowServing(array) {
    if (array.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      var servingCustomer = array.shift();
      return `Currently serving ${servingCustomer}.`
    }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
      var customerArray = []
      for (var i = 0; i < line.length; i++) {
        customerArray.unshift(` ${i + 1}. ${line[i]}`)
      }
      return `The line is currently:${customerArray.reverse().join()}`
  }
}
