function takeANumber(katzDeliLine, name) {
      return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`
}

function nowServing(katzDeliLine) {
       if (katzDeliLine.length > 0)
        {
          return `Currently serving ${katzDeliLine.shift()}.`;
          katzDeliLine.shift()
        }
        else {
          return "There is nobody waiting to be served!"}
        }

function currentLine(katzDeliLine) {
  var katzDeliCurrentLine = katzDeliLine.map(function(name, index) {
  return ` ${index + 1}. ${name}` });
      if (katzDeliLine.length > 0) {
          return `The line is currently:${katzDeliCurrentLine}`}
      else {
          return "The line is currently empty."}
       }
