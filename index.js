//cont katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  let serving = [...katzDeliLine]
  if (!serving[0]){
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine.shift()
    return `Currently serving ${serving[0]}.`
  }
}

function currentLine(katzDeliLine) {
    let string = "The line is currently:"
      if(katzDeliLine.length < 1) {
        return "The line is currently empty."
        } else {
          for(let i = 0; i < katzDeliLine.length -1; i++) {
            string = string +  ` ${i + 1}. ${katzDeliLine[i]},`
          }
          return string + ` ${katzDeliLine.length}. ${katzDeliLine.slice(-1)[0]}`
          }
    }
