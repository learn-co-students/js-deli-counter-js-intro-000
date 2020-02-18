function takeANumber(katzDeliLine, newPerson)
{
  katzDeliLine.push(newPerson);
  return  `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeli) {

if(katzDeli.length === 0)
    {
      return "There is nobody waiting to be served!"
    }
    else {
        for(let i = 0; i < katzDeli.length; i++) {
          return `Currently serving ${katzDeli.shift()}.`
    }
  }
}

function currentLine(line)
{

  var lineA = [];
  if(line.length === 0)
  {
  return "The line is currently empty."
  }
  else
  {
    for(let i = 0; i < line.length; i++)
    {
        lineA.push(` `+[i+1]+`. `  + line[i])
    }
    return  "The line is currently:" + lineA;
  }
}
