function takeANumber(line, name) {
  line.push(name);
  var place = line.length
  return "Welcome, " + name + ". You are number " + place + " in line.";
  // for (var i = 0; i < line.length; i++) {
  //   var place = i + 1;
  //   return "Welcome, " + name + ". You are number " + place + " in line.";
  // }
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var served = line.shift();
    return "Currently serving " + served + "."
  }

}

function currentLine(line) {
  var currentLine = []
  if (line.length < 1) {
    return "The line is currently empty.";

  }
    for (var i = 0; i < line.length; i++) {
      var place = i + 1
      currentLine.push(place + ". " + line[i])
    }

    return "The line is currently: " + currentLine.join(", ")
}
