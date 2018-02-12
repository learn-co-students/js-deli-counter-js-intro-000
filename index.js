function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var sentence = 'The line is currently:';
    var index = 1;
    while (line.length > 0) {
      sentence = sentence + ` ${index}. ${line.shift()}`
      if (line.length) {sentence += ',';}
      index++;
    }
  }
  return sentence;
}
