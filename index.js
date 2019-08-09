var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.'
}

function nowServing(x, deliLine, name) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0]
    x.shift(0)
    return "Currently serving " + name + "."
  }
}

function currentLine(x) {
  var line
  if (x.length === 0){
    line = 'The line is currently empty.'
  } else {
    line = 'The line is currently: '
    for(var i = 0; i < x.length ; i++) {
      if (i === 0){
        line = line + (i + 1) + '. ' + x[i]
      } else {
        line = line + ', ' + (i + 1) + '. ' + x[i]
      }
    }
  }
    return line
}
