function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`)
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`)

}

function nowServing(katzDeliLine) {
  let i = 0
  while (i < katzDeliLine.length) {
    i++
  }
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }else{
    return (`Currently serving ${katzDeliLine.shift()}.`)
  }
}



function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return (`The line is currently empty.`)
  } else {
    var arr = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      arr.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return (`The line is currently:` + arr)
  }
}
