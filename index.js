function takeANumber (line, name) {
  // body...
  line.push(name)
  return "Welcome, " + name + ". You are numer " + line.length + "line."; 
}

function nowServing (line) {
  // body...
  if (line.length <= 0) {
    return "Theres nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine (line) {
  // body...
  if (line.length <= 0) {
    return "The line is currently empty.";
  }
  else {
    var placeHolder = [];
    line.forEach(function (name, index) {
      // body...
      num = index ++;
      placeHolder.push(` ${num + 2}. ${name}`)
    });
    return "Line is currently:" + placeHolder;
  }
}