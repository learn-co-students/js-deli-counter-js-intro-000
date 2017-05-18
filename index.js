var katzDeli = [];

function takeANumber(katzDeliLine, personName) {
 katzDeliLine.push(personName)
 return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
}
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {


  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var katzDeliLineList = String();
  var i = 0;
  for (i = 0; i < katzDeliLine.length; i++) {
      if (katzDeliLine.length === i + 1) {
      katzDeliLineList = `${katzDeliLineList} ${i+1}. ${katzDeliLine[i]}`
    } else {
      katzDeliLineList = `${katzDeliLineList} ${i+1}. ${katzDeliLine[i]},`
    }
  }
  return `The line is currently:${katzDeliLineList}`
}
