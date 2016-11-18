function takeANumber(line, person) {
  line.push(person);
  return "Welcome, " + person + ". You are number " + (line.length) + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var customer = line.shift()
    return "Currently serving " + customer + "."
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    //"The line is currently: 1. Bill, 2. Jane, 3. Ann"
    var people = "The line is currently: ";
    var counter = 1;
     while(counter<line.length) {
      people += counter + ". " + line[counter-1] + ", ";
      counter++;
    }
    people += counter + ". " + line[counter-1]
    return people;
  }
}
