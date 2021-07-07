function takeANumber(line, name){
  do {
    line.push(name);
  } while (line.indexOf(name) == -1)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  var a = "";
  if (line.length>0) {
    var person = line[0];
    line.shift();
    a = `Currently serving ${person}.`;
  }
  else {
    a = "There is nobody waiting to be served!"
  }
  return a;
}


function currentLine(line) {
  var statement = ""
  if (line.length>0) {
    statement = "The line is currently:";
    for (let i=0; i<line.length; i++) {
      var position = i+1
      if (i != line.length-1) {
      statement += ` ${position}. ${line[i]},`
      }
      else
      statement += ` ${position}. ${line[i]}`
    }
  }
  else {
    statement = "The line is currently empty."
  }
  return statement
}
