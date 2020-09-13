function takeANumber(line, name) {
line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
};



function nowServing(line) {
  if (line.length > 0) {
    return "Currently serving " + line.shift() + "."
  } else {
      return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var output = "";
    for(var i = 0; i < katzDeliLine.length; i++) {
        output += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return "The line is currently empty.";
  }
}
