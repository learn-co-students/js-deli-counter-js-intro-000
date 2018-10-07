var katzDeliLine = []

function takeANumber (line,customer) {
  var position = line.length + 1
  line.push(customer)
  return `Welcome, ${customer}. You are number ${position} in line.`
}

function nowServing (line) {
  if (line.length > 0) {
    return "Currently serving "+line.shift()+".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (line) {
  var array = []
  if(line.length > 0) {
    for (let i = 0; i < line.length; i++) {array.push(" "+(i+1)+". "+line[i])}
  return "The line is currently:"+array}
  else {
    return "The line is currently empty."
  }
}
