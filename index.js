const takeANumber = (arr, name) => {
  arr.push(name)
  let pos = arr.length;
  return `Welcome, ${name}. You are number ${pos} in line.`
}

const nowServing = (line) => {
  if(line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${line.shift()}.`
}

const currentLine = (newLine) => {
  if(newLine.length === 0) {
    return 'The line is currently empty.'
  }

  let result = 'The line is currently: '

  for(let i = 0; i < newLine.length; i++) {
    result += `${i + 1}. ${newLine[i]}${i === newLine.length - 1 ? '' : ', '}`
  }

  return result;
}
