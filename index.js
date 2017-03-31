var katzDeliLine = []

function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
    var names = `1. ${line[0]}`
    for (let i = 1, l = line.length; i < l; i++) {
      var name = ` ${i + 1}. ${line[i]}`
      names = names + "," + name
    }
    return "The line is currently: " + names
  }
}
