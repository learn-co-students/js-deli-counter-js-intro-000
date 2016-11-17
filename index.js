function takeANumber(line, person){
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  var now = line[0];
  line = line.shift();
  return "Currently serving " + now + ".";
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  var ret = "The line is currently: ";
  for (var i = 0; i < line.length; i++){
    if (i === line.length-1){
      ret += (i+1) + ". " + line[i];
    }
    else{
      ret += (i+1) + ". " + line[i] + ", ";
    }
  }
  return ret;
}
