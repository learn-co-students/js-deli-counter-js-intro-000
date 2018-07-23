function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}



function nowServing(line,name) {
  if(line.length <= 0) {
  line.shift()
} else {
  return  "There is nobody waiting to be served!"
}
}


function currentLine(name) {
  // takeANumber(katzDeliLine, "Ada");
}
