function takeANumber(deliLine, name) {
  deliLine.push(name)
  return(`Welcome, ${name}. You are number ${deliLine.length} in line.`)
}
function nowServing(deliLine) {
  if (deliLine.length === 0){
    return ("There is nobody waiting to be served!")
  }
  var serving = deliLine.shift()
  return(`Currently serving ${serving}.`)
}

function currentLine(line) {
  if (line.length===0){
    return("The line is currently empty.")
  }
  let text = "The line is currently: "
  for (var i=0; i<line.length; i++){
    text = text + `${i+1}. ${line[i]}`
    if (i!==line.length-1){
      text = text + ", "
    }
  }
  return text;
}
