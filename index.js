function takeANumber(line, name){
line.push(name)

var message = `Welcome, ${name}. You are number ${line.length} in line.`
return message
}

function nowServing(line){
  if(line.length ===0){
    return "There is nobody waiting to be served!"
  }
  else {
    var nline = [line[0]]
      line.shift()
  return `Currently serving ${nline}.`}
  }

function currentLine(line){
  if(line.length ===0){
    return "The line is currently empty."
}
else {
  var fullLine = "The line is currently: "
  for (var i =1; i<=line.length; i++){
    fullLine = fullLine + i +". " + line[i-1] + ", ";
  }
  fullLine = fullLine.slice(0,-2)
  return fullLine
}
}
