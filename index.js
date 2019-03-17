var katzDeliLine = []

function takeANumber(line,name){
line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else { var mem = line[0]
    line.shift()
    return `Currently serving ${mem}.`
}

}

function currentLine (line) {
  if (line.length === 0) {
      return 'The line is currently empty.'
    } else { var string = 'The line is currently:';
  for (var i=0;i<line.length;i++) {
    string += ` ${i+1}. ${line[i]}`
    if (i != line.length-1) {
      string += ','
    } }
    return string

    }}
