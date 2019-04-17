function takeANumber(katzDeliLine, nwew) {
  katzDeliLine.push(nwew);
  return `Welcome, ${nwew}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(line) {
  var d = line[0]
  if (line.length > 0) {
    line.shift()
    return `Currently serving ${d}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}
 function currentLine(lines) {
    if (lines.length < 1) {
      return "The line is currently empty."
    }
    var curr = []

    for (var i = 0; i < lines.length; i++) {
      curr.push(`${i + 1}. ${lines[i]}`)
    }
    return `The line is currently: ${curr.join(", ")}`

 }
