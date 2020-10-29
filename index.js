function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ` + line.length + ` in line.`
}

function nowServing(line) {
  if(!line.length) {
      return `There is nobody waiting to be served!`;
  } else {
    return "Currently serving " + line.shift() + `.`;
  }
}

function currentLine(line) {
  if(!line.length) {
    return `The line is currently empty.`;
  }
  var lineNamesAndNumbers = []

  for(var i = 0; i < line.length; i++) {
    lineNamesAndNumbers.push(i + 1 + `. ` + line[i]);
  }
    console.log(`The line is currently: ` + lineNamesAndNumbers);
    return `The line is currently: ` + lineNamesAndNumbers.join(`, `);
}

// function currentLine(line){
//   if(!line.length) {
//     return "The line is currently empty.";
//   }
//   var lineNamesandNumbers = [];
//
//   for(var i=0; i<line.length; i++) {
//     lineNamesandNumbers.push(i+1 + ". "+ line[i]);
//   }
//   console.log("The line is currently: " + lineNamesandNumbers)
//   return "The line is currently: " + lineNamesandNumbers.join(', ');
// }
