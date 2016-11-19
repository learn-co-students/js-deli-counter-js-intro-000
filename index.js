

// The function should return their position in line.
function takeANumber (line, name) {

  line.push(name)

return `Welcome, ${name}. You are number ${line.length} in line.`

}

// Build a function nowServing. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing (line) {
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`//removes the first person in array line
}

// Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada 2. Grace". If there is nobody in line, it should return "The line is currently empty."
function currentLine(line, name) {
  if (line.length === 0){
    return "The line is currently empty."
  }

    const numbersAndNames = []

  for (let i=0, l=line.length; i<l; i++){
    numbersAndNames.push( `${i+1}. ${line[i]}` )
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`

}
