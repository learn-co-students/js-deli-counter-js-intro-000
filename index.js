function takeANumber(line, name){
  return `Welcome, ${name}. You are number ${line.length + 1} in line.`
}

function nowServing(line){
  if line.length > 0 {
    var i = line.shift()
    return `Currently serving ${i}.`
  } else {
    return  "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if line.length = 0 {
    return "The line is currently empty."
  }
  var sline = `The line is currently:`
  for (i = 0, i < line.length, i++){
    sline += ` ${i + 1}. ${line[i]}`
    if i != line.length {
      sline += `,`
    }
  }
  return sline
}
