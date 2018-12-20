function takeANumber(deliLine, name)
{
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var patron = katzDeliLine.shift()
    return `Currently serving ${patron}.`
  }
}

function currentLine(deliLine)
{
  if (deliLine.length < 1) {
    return "The line is currently empty."
  } else {
    var str = 'The line is currently: '
    for(let i = 0; i < deliLine.length; i++){
      str += `${i + 1}. ${deliLine[i]}, `
    }
    return str.slice(0, -2)
  }
}
