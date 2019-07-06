function takeANumber(katsDeliLine,name) {
  katsDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katsDeliLine.length} in line.`
}

function nowServing(katsDeliLine) {
  var i = 0
  while (i <= katsDeliLine.length) {
    i++;
    if (katsDeliLine.length === 0) {
      return "There is nobody waiting to be served!";
    }
    else return `Currently serving ${katsDeliLine.shift()}.`
  }
}


var deliLine = []

function currentLine(katsDeliLine) {
  var i = 0;
  while (i < katsDeliLine.length) {
    deliLine.push(' '+[i+1]+`. ` + katsDeliLine[i])
    i++;
  }
    if (katsDeliLine.length === 0) {
      return "The line is currently empty.";
    } else
    return ('The line is currently:' + deliLine);
}
