var katzDeli = []
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)

}

function nowServing(katzDeliLine) {
  if (typeof katzDeliLine[0] !== 'undefined') {
    var stufftoreturn
    stufftoreturn = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return stufftoreturn
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (typeof katzDeliLine[0] !== 'undefined') {
    var array = []
    for (let i = 0; i < katzDeliLine.length; i++) {
      array.push(`${[i + 1]}. ${katzDeliLine[i]}`)
    }
  }
  else {
    return "The line is currently empty."
  }
array = array.join(", ")
array = `The line is currently: ` + array
return array
}
