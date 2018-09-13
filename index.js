var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (!line.length) {
    console.log("There is nobody waiting to be served!")

    return "There is nobody waiting to be served!"
} else {

  return "Currently serving " + line.shift() + ".";
  }
}
function currentLine(line)  {

    if (!line.length)  {
        return "The line is currently empty.";
    }
    var linesNamesandNumbers = [];

    for(var i = 0; i<line.length; i++) {
       linesNamesandNumbers.push(i + 1+ ". " + line[i]);
     }
     console.log("The line is currently: " + linesNamesandNumbers)
     return "The line is currently: " + linesNamesandNumbers.join(", ");
}
