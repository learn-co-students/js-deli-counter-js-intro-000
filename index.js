function takeANumber(line, name)
{
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeli)
{
  if (katzDeli.length != 0)
  {
    return `Currently serving ${katzDeli.shift()}.`
    katzDeli = katzDeli.shift()

  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line)
{
  var katzDeliLine = "The line is currently: "
  if (line.length != 0)
  {
    for(var i = 0;i<line.length-1; i++)
    {
      katzDeliLine += `${i+1}. ${line[i]}, `
    }
    katzDeliLine += `${i+1}. ${line[i]}`
    return katzDeliLine
  }else {
    return "The line is currently empty."
  }

}
