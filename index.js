function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine.shift()
    return "Currently serving " + person + "."
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === (katzDeliLine.length - 1)){
        katzDeliLine[i] = `${i + 1}. ${katzDeliLine[i]}`
      } else {
        katzDeliLine[i] = `${i + 1}. ${katzDeliLine[i]},`
      }
    }
    return line + katzDeliLine.join(' ')
  }
}
