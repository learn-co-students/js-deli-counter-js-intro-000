
function takeANumber(currentLine, customers_name) {
  currentLine.push(customers_name)
  return `Welcome, ${customers_name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(current_Line) {
  var line = ["The line is currently: "]
  if (current_Line.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < current_Line.length; i += 1) {
      line.push(`${i+1}. ${current_Line[i]}, `)
    }
  line = line.join('')
  return line.slice(0,-2)
  }
}
