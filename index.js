function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  if(line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.'
  }

  let i = 0
  var list = []

  while (i < line.length) {
    list.push(` ${i + 1}. ${line[i]}`)
    i++
  }

  return 'The line is currently:' + list.toString()

}
