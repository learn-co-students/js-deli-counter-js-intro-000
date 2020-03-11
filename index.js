function takeANumber(line, name) {
  let i = 0
  line.push(name)
  while (line[i] != name && i < line.length + 3) {
    i++
  }
  return `Welcome, ${name}. You are number ${i+1} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  } else {
    var st = 'The line is currently:'
    let i = 0
    do {
      st += ` ${i + 1}. ${line[i]},`
      i++
    } while (i < line.length)
    st = st.slice(0, -1)
    return st
  }
}
