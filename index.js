
var katzDeliLine = [];
function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}



function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
      return "There is nobody waiting to be served!";
  }
}

function currentLine(NewLine) {
    var line = []
    if (NewLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < NewLine.length; i++) {
        line += (i + 1) + ". " + NewLine[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}
