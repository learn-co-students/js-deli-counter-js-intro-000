function takeANumber(line,name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var next = line[0];
    line.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else {
    let i = 0;
    var output = "The line is currently: "
    while (i < line.length){
      output += `${i}. ${line[i]},`;
      i += 1;
    }
  }
  return output;
}
