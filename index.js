function takeANumber(line, name) {
  line.push(name);
  return("Welcome, " + name + ". You are number " + (line.length) + " in line.");
}

function nowServing(line) {
  var customer = line[0];
  line.shift();
  if(line.length === 0) {
    return ("There is nobody waiting to be served!");
  } else return ("Currently serving " + customer +".");
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    var people = "The line is currently:";
    for(let i = 0; i < line.length; i++) {
      people += " " + (i + 1) + ". " + line[i];
      if(i < line.length - 1){ 
        people += ",";
      }
    }
    return people;
  }
}