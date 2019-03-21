function takeANumber(line, name) {
  //console.log "Welcome, [name]. You are number [line] in line."
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  //return 1st person in line with "Currently serving [name]", remove person from current line
  //if noone in line, return "There is nobody waiting to be served!"
  if(!Array.isArray(line) || !line.length)
    return "There is nobody waiting to be served!"
  else
    return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  //returns line as string. if array is ["Ada", "Grace"]
  // currentLine(katzDeliLine) would return
  //"The line is currently: 1. Ada, 2. Grace"
  //if noone, "The line is currently empty"
  if(!Array.isArray(line) || !line.length)
    return "The line is currently empty."
  else {
    var arr = []
    for(let i = 0; i < line.length; i++) {
      arr.push(`${i+1}. ${line[i]}`)
    }
    return `The line is currently: ${arr.join(', ')}`
  }
}
