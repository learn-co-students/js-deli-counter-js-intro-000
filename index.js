function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    let count = 0;
    let string = 'The line is currently:'

    do {
      string +=` ${count + 1}. ${katzDeliLine[count]},`
      count++
    } while (count < katzDeliLine.length)
    return string.slice(0, string.length - 1)
  }
  return 'The line is currently empty.'

}
