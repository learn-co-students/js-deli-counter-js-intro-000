function takeANumber(line,name) {

  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {

  if (line.length > 0) {
    var customer=line.splice(0,1)
    return `Currently serving ${customer}.`
}
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var status="The line is currently:"
    for (let i=0; i<line.length; i++) {
  	if (i < line.length-1) {
      	status=status+` ${i+1}. ${line[i]},`
      }
      else {
      	status=status+` ${i+1}. ${line[i]}`
      }
    }
    return status
  }
  else {
    return "The line is currently empty."
  }
}
