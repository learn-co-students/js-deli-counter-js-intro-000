function takeANumber(line, person){
  line.push(person);
  let i = 0;
  while(i < line.length){
    if(line[i] == person){
      return `Welcome, ${person}. You are number ${i+1} in line.`;
    }
    i++;
  }
}

function nowServing(line){
  if(line.length == 0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }
  let i = 0;
  var st = 'The line is currently: ';
  while(i < line.length){
    if(i+1 === line.length){
      return st += `${i+1}. ${line[i]}`;
    }else{
      st += `${i+1}. ${line[i]}, `;
    }
    i++;
  }
}
