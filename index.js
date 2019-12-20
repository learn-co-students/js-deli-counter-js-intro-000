function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0] === undefined){
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
if (katzDeliLine[0] === undefined){
  return 'The line is currently empty.';
}
else {
  var line = [];
  for (let i = 0; i < katzDeliLine.length; i++){
      if (i >=0 && i < katzDeliLine.length - 1){
        line = `${line} ${i + 1}. ${katzDeliLine[i]},`
      }
      else {
      line = `${line} ${i + 1}. ${katzDeliLine[i]}`;
      }
    }
    return `The line is currently:${line}`;
  }
}
