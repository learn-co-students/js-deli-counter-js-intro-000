function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var n = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${n} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) { /*don't forget!!*/
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`; /*returns deleted item*/
  }
}

function currentLine(katzDeliLine) {
  function addNumber() {
    var list = [];
    let m = 1;
    while (m < katzDeliLine.length) {
      list.push(' ' + (m+1) + '. ' + katzDeliLine[m]), m++;
    }
    return list;
  }
  var answer = `The line is currently: 1. ${katzDeliLine[0]},`;
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    return answer += addNumber();
  }
}
