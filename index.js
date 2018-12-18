function takeANumber(line, customer) {
  line.push(customer)
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  let list = 'The line is currently: '

  for (var i = 0, l = line.length; i < l; i++) {
    if (i === l - 1) {
        list = list + `${i + 1}. ${line[i]}`
      } else {
        list = list + `${i + 1}. ${line[i]}, `
      }
  }
  return list
}
