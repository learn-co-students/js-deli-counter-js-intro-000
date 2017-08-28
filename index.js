var katzDeli = []

function takeANumber(queue, name) {
  queue.push(name);
  return `Welcome, ${name}. You are number ${queue.indexOf(name) + 1} in line.`;
}

function nowServing(queue) {
  if (queue.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${queue.shift()}.`;
}

function currentLine(queue) {
  if (queue.length === 0) {
    return `The line is currently empty.`;
  }
  let line = "The line is currently: "
  let people = []
  for(let i = 0; i < queue.length; i++) {
    people[i] = `${i+1}. ${queue[i]}`;
  }

  return line + people.join(", ");
}
