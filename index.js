function takeANumber(people, name) {
  people.push(name)
  return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing(katzDeliLine) {
  var newline = katzDeliLine.slice(0);
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return `Currently serving ${newline[0]}.`;
  } else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(people) {
    if (people.length > 0){
  var copyline = ""
  for (let i = 0; i < people.length; i += 1) {
    copyline += (i + 1) + ". " + people[i] + ", ";
}
  copyline = copyline.slice(0, copyline.length - 2)
  return "The line is currently: " + copyline;
} else if (people.length === 0) {
  return "The line is currently empty."
}
}
