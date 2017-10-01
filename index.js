var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(line){
  if (line.length < 1){
    return 'There is nobody waiting to be served!';
  } else if (line.length >= 1){
    var message = `Currently serving ${line[0]}.`;
    line.shift();
    return message;
  }
}
function currentLine(line){
  if (line.length > 0){
    var arrayLine = '';
    for (var i = 1; i <= line.length; i++){
      if (i == line.length){
      arrayLine = arrayLine+(`${i}. ${line[i-1]}`)
    } else {
      arrayLine = arrayLine+(`${i}. ${line[i-1]}, `)
    }
    }
    return (`The line is currently: ${arrayLine}`)
  } else {
    return 'The line is currently empty.'
  }
}
