var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(arr) {
  if (arr.length > 0) {
    return `Currently serving ${arr.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr) {
  const namesAndNumbers = [];

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      namesAndNumbers.push(`${i+1}. ${arr[i]}`);
    }

    return `The line is currently: ${namesAndNumbers.join(', ')}`;
  }
  else {
    return 'The line is currently empty.'
  }
}
