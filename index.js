var lineofpeople = [];

function takeANumber(lineofpeople, newcustomer) {
  var add = lineofpeople.length + 1;
  lineofpeople.push(newcustomer);
  return lineofpeople = `Welcome, ${newcustomer}. You are number ${add} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${line.shift()}.`
  }

  function currentLine(line) {
      if (!line.length) {
          return "The line is currently empty.";
      }
      var group = [];
      for(var i = 0; i < line.length; i++) {
          var list = `${i + 1}. ${line[i]}`
          group.push(list)
      }
      return `The line is currently: ${group.join(", ")}`
  }

takeANumber(lineofpeople, "marcy");
takeANumber(lineofpeople, "lucy");
takeANumber(lineofpeople, "claire");
takeANumber(lineofpeople, "Nancy");
nowServing(lineofpeople);
currentLine(lineofpeople);
