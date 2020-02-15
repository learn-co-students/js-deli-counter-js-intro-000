var customerLine = [];

function takeANumber(customerLine, name) {
  customerLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${customerLine.length} in line.`;
}


function nowServing(customerLine) {
  if (customerLine.length !== 0) {
      return (`Currently serving ${customerLine.shift()}.`);
    } else {
      return "There is nobody waiting to be served!";
    }
  }


function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty.";
  }else{
    var updatedLine = [];
    for (var i = 0; i < line.length; i++) {
      updatedLine.push(` ${i+1}. ${line[i]}`);
  }
}
  return "The line is currently:" + updatedLine;
}
