  function takeANumber(katzDeli, newPerson){
    var position = katzDeli.length + 1;
    katzDeli.push(newPerson);
    if(katzDeli.length > 0){
    var response = 'Welcome, ' + newPerson + '. You are number ' + position + ' in line.';
    return response;}
    else { response = 'The line is currently empty.';
           return response;
         }
  }

function nowServing(katzDeli){
  if (0 === katzDeli.length){
    var response = 'There is nobody waiting to be served!';
    return response;
  }
  else {
    var person = katzDeli.shift();
    var response = 'Currently serving ' + person +'.';
    return response;
  }
}

function currentLine(katzDeliLine){
    var line = [];
    let i = 0;
    while (i < katzDeliLine.length) {
      line.push(' ' + [i+1] + '. ' + katzDeliLine[i])
      i++;
    }
  if (0 === katzDeliLine.length){
    var response = 'The line is currently empty.';
    return response;}
    else {
      return('The line is currently:' + line);

      }
    }
