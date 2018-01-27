var katzDeli = [];

function takeANumber(katzDeliLine, newPersonsName) {
  katzDeliLine.push(newPersonsName);
  return `Welcome, ${newPersonsName}. You are number ${katzDeliLine.length} in line.`
  return katzDeliLine
}

function nowServing(katzDeliLine) {
    //return 'There is nobody waiting to be served!';
    let i = katzDeliLine.length
    if(i === 0) {
      return 'There is nobody waiting to be served!'
    }
    else {
      return `Currently serving ${katzDeliLine.shift()}.`
    }
}

function currentLine(katzDeliLine) {
  var lineList = 'The line is currently: '
  let i = katzDeliLine.length
  if(i === 0) {
    return 'The line is currently empty.'
  }
  else {
    for(let n = 0; n < i-1; n++) {
      lineList = lineList + `${n+1}. ${katzDeliLine[n]}, `
    }
    return lineList + `${i}. ${katzDeliLine[i-1]}`
  }
}
