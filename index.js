function takeANumber(line, name){
  line.push(name);

  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  var current = [];

  for (var x = 0; x < line.length; x++){
    current.push(" " + [x+1] + ". " + line[x])
  }

  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently:" + current;
  }



}
