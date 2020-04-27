function takeANumber(line, name)
{
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line)
{
  if(line.length < 1)
  {
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line)
{
  var string = `The line is currently: `
  if(line.length < 1)
  {
    return `The line is currently empty.`
  }

  var names
  for(let i = 0; i < line.length; i += 1)
  {
    names.add(`${i + 1}. ${line[i]}`)
  }
  
  string = string + names.join(", ")
  return string;
}
