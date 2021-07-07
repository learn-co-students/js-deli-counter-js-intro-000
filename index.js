var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(arr){
  var nextPerson = arr.shift();
  if(nextPerson){
    return `Currently serving ${nextPerson}.`;
  }else if (nextPerson == undefined){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var newLine = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < line.length; i++){
      var number = [' ' + (i + 1) + '. ' + line[i]];
      newLine.push(number);
    }
  }
  return 'The line is currently:' + newLine;
}
