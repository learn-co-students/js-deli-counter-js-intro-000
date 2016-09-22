function takeANumber(array, name) {
  array.push(name);
  var position = array.indexOf(name) +1;
  return "Welcome, " +name+ ". You are number " +position+ " in line.";
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      return "Currently serving " +line.shift()+ ".";
    }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
      return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2];      
    }
}
