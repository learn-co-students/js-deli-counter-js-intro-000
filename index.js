function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0) {
  return `Currently serving ${line.shift()}.`

}
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine (line){
  var cue = ""
  let i = 0
  if (line.length > 0){
  for (i =0; i < line.length; i++) {
    cue = `${cue} ${i+1}. ${line[i]}${(i+1)<line.length ? "," :""}`
}
  return `The line is currently:${cue}`
}
else{
  return `The line is currently empty.`
}
  }
