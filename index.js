const takeANumber = (line, name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

const nowServing = line => {
  if (line.length == 0) return "There is nobody waiting to be served!"
  else {
    let person = line[0];
    line.shift();
    return `Currently serving ${person}.`;
  }
}

const currentLine = line => {
  let message = "The line is currently";
  if (line.length === 0) {
    message += " empty."
    return message;
  } else {
    message += ":"
    for (var i = 0; i < line.length; i++) {
      message += ` ${i+1}. ${line[i]}${i + 1 == line.length ? '' : ',' }`
    }
  }
  return message;
}
