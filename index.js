function takeANumber(line, person) {
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if(line.length > 0) {
    let curr = line.shift();
    return "Currently serving " + curr + ".";
  }
  return "There is nobody waiting to be served!";
}

function currentLine(line) {
  let str = "The line is currently: ";
  let len = line.length;
  if(len == 0) {
    return str.replace(": ", " empty.");
  }
  for(let i = 0; i < len; ++i) {
    str += (i + 1) + ". " + line[i];
    if(i < len - 1) {
      str += ", ";
    }
  }

  return str;
}
