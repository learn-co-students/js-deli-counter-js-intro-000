function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
} 

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } 
  var output = [];
  for (var i = 0; i < line.length; i++) {
      output.push(`${i + 1}. ${line[i]}`);
  }
     return `The line is currently: ${output.join(', ')}`;
}

/*How are we supposed to know to use .join if we've never heard of it before? A hint would be nice, we are beginngers after all*/
     
    