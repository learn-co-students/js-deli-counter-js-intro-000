let takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(`${name}`);
  if (katzDeliLine.length > 0) {
    let i = katzDeliLine.length;
    return `Welcome, ${name}. You are number ${[i]} in line.`
  } else {
    let i = 1;
    return `Welcome, ${name}. You are number ${[i]} in line.`
  }
}

let nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine
}

let currentLine = katzDeliLine => {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    let array = [];
    for (let i = 0; i < katzDeliLine.length; i += 1) {
      array.push(` ${i + 1}. ${katzDeliLine[i]}`)
    } return `The line is currently:${array}`
  }
}
