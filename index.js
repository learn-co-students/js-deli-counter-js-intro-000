var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  }

function nowServing(katzDeliLine) {
  var nextName = katzDeliLine.shift()
  if (katzDeliLine.length > 0) {
    return(`Currently serving ${nextName}.`)
  } else {
    return("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  var lineCurrently = "The line is currently: "
  if (katzDeliLine.length > 0) {
      for (var i = 0; i < katzDeliLine.length; i++) {
        lineCurrently += `${i+1}. ${katzDeliLine[i]}`;
          if (i < katzDeliLine.length - 1) {
            lineCurrently += `, `}
      }
        return lineCurrently
    } else {
        return "The line is currently empty." }

}
