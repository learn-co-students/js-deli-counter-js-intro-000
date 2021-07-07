function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0) {
    var i = line.shift()
    return `Currently serving ${i}.`
  } else {
    return  "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var sline = `The line is currently: 1. ${line[0]}`
    for (var i = 1; i < line.length; i++){
      sline += `, ${i + 1}. ${line[i]}`
    }
    return sline
  }
}
