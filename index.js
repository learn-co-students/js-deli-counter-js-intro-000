var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var delilength = katzDeliLine.length
  return `Welcome, ${name}. You are number ${delilength} in line.`
}

function nowServing(something) {
   if (something.length === 0) {
     return "There is nobody waiting to be served!"
   } else {
     var message =  `Currently serving ${something[0]}.`
     something.shift();
     return message
   }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  }
}
