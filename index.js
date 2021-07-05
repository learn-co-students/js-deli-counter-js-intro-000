const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

const nowServing = (katzDeliLine) => {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return 'There is nobody waiting to be served!';
}

const currentLine = (katzDeliLine) => {
  let lineLength = katzDeliLine.length;
  
  if (lineLength <= 0) {
    return 'The line is currently empty.';
  }
  
  let message = 'The line is currently: '
  for (let i = 0; i < lineLength; i++) {
    message += `${i + 1}. ${katzDeliLine[i]}`
    if (i < lineLength - 1) {
      message += ', '
    }
  }
  
  return message
}

