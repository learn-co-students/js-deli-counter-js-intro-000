function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let customer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${customer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let sentence = ""
    for (let i=0 ; i<katzDeliLine.length; i++) {
      sentence = `${sentence}${i+1}. ${katzDeliLine[i]}`
      if (i<katzDeliLine.length-1) { sentence = `${sentence}, `}
    }
    return `The line is currently: ${sentence}`
  } else {
    return "The line is currently empty."
  }

}
