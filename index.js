function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line){
  var beingServed = [];
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
  beingServed.push(line[0]);
  line.shift();
  return `Currently serving ${beingServed[0]}.`
}
};

function currentLine(line){
  var numberedLine = [];
  if (line.length === 0){
    return `The line is currently empty.`;
  }
  else {
    for (var i = 0; i < line.length; i++){
      if (i === 0){
        numberedLine.push(`${i+1}. ${line[i]}`);
      }
      else {
      numberedLine.push(` ${i+1}. ${line[i]}`);
      }
    }
    return `The line is currently: ${numberedLine}`;
  }
};
