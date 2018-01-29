var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0 ) {
    return `Currently serving ${katzDeliLine.shift()}.`;

  } else {
    return "There is nobody waiting to be served!"
  }

}


function currentLine(katzDeliLine) {
  var line = []
  var i = 0
  while (i < katzDeliLine.length) {
    line.push(`${i+1}. ${katzDeliLine[i]}`)
    i++
    } if (line.length > 0){
      return `The line is currently: ${line.join(", ")}`
    } else {
      return `The line is currently empty.`
  }

}
