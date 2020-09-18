function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${katzDeliLine.slice(-1)}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length==0){
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length==0) {
    return `The line is currently empty.`
  } else {
    var text1 = "The line is currently: "
    for (var i=0; i<katzDeliLine.length; i++) {
      text1=text1 + (i+1) + ". " + katzDeliLine[i]
      if (i<katzDeliLine.length-1) {
        text1 = text1 + ", "
      }
      }

    return text1
  }
}
