function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  var served = line.shift()
  if(line.length == 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${served}.`
  }
}

function currentLine(line){
  var string
  if(line.length == 0){
    string = "The line is currently empty."
  }
  else{
    string = "The line is currently:"
    for(let i = 0; i < line.length; i++){
      if(i == 0){
        string = string + ` ${i+1}. ${line[i]}`
      }
      else{
        string = string + `, ${i+1}. ${line[i]}`
      }
    }
  }
  return string
}
