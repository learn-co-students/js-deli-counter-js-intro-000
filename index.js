function takeANumber(queue, new_person) {
  queue.push(new_person);
  return `Welcome, ${new_person}. You are number ${queue.length} in line.`
}
function nowServing(queue) {
  if(queue.length === 0) {return "There is nobody waiting to be served!";}
  else {
      let current_cust = `Currently serving ${queue[0]}.`;
      queue.shift();
    return current_cust;
  }
}
function currentLine(queue) {
  var len = queue.length;
  var line = "The line is currently: ";
  if(queue.length === 0) {return "The line is currently empty.";}
  else {
    let count = 1;
    for(let i = 0; i < len; i++) {
      if(count === len) {line += `${count++}. ${queue[i]}`;}
      else {line += `${count++}. ${queue[i]}, `;}
    }
    return line;
  }
}
