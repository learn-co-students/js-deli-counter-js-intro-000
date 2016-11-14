var katzDeliLine = [];
//
function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.splice(0,1)}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var LineList = []
    katzDeliLine.forEach(
      function(name, index) {
        var queue = index + 1;
        LineList.push(`${queue}. ${name}`)
      });
    return `The line is currently: ${LineList.join(', ')}`
  }
}
