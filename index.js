function takeANumber(line, name) {
  line.push(name);
  return(`Welcome, ${name}. You are number ${line.length} in line.`)
}

function currentLine(line) {
  if(line.length == 0) {
    var temp = 'The line is currently empty.';
  } else {
    var temp = 'The line is currently:'
    for (let i = 1; i <= line.length; i++) {
      temp = temp.concat(` ${i}. ${line[i-1]}${(i < line.length ? ',' :'')}`);
    }
  }
  return temp;
}

function nowServing(line) {
  if(line.length == 0)  {
    return("There is nobody waiting to be served!");
  } else {
      return(`Currently serving ${line.shift()}.`)

  }
}
