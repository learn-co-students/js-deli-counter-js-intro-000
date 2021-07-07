function takeANumber(current, next){
  current.push(next);
  var num = current.length;
  return `Welcome, ${next}. You are number ${num} in line.`;
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  } else{
    var serving = `Currently serving ${line[0]}.`;
    line.shift();
    return serving;
  }
}

function currentLine(currentLine){
  if(currentLine.length === 0){
    return "The line is currently empty.";
  } else{
    var place = 1;
    var holder = [];
    for(var i = 0; i < currentLine.length; ++i){
      holder[i] = ` ${place}. ${currentLine[i]}`;
      place++
    }
    return `The line is currently:${holder}`
  }
}