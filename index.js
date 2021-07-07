function takeANumber(line, newName) {
 line.push(newName)
 var position = line.indexOf(newName) + 1
 return `Welcome, ${newName}. You are number ${position} in line.`
}

function nowServing(line) {
  if(line.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var now = `Currently serving ${line[0]}.`
    line.shift()
    return now 


  }
}

function currentLine(line){
  if(line.length > 0){
    var linestring = "The line is currently:"
    for (let i = 0; i < line.length; i++) {
      if(i == 0){
        linestring = linestring + ` ${i+1}. ${line[i]}`
      }
      else{
        linestring = linestring + `, ${i+1}. ${line[i]}`
      }
    }
    return linestring
  }
  else {
    return "The line is currently empty."
  }
}
