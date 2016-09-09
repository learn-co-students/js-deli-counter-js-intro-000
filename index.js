var katzDeliLine = [];

function takeANumber(lineArray, customer){
  lineArray.push(customer);
  var placeInLine = lineArray.length;
  return `Welcome, ${customer}. You are number ${placeInLine} in line.`;
}

function currentLine(lineArray){
  if(lineArray.length === 0){
    return 'The line is currently empty.';
  }else{
    var message = 'The line is currently:';
    var currentLineNames = '';

    for(var i = 0; i < lineArray.length; i++){
      var lineCounter = i + 1;
      if(lineCounter === lineArray.length){
        currentLineNames = currentLineNames + ` ${lineCounter}. ${lineArray[i]}`;
      }else{
        currentLineNames = currentLineNames + ` ${lineCounter}. ${lineArray[i]},`;
      }
    }
    return message + currentLineNames;
  }
}

function nowServing(lineArray){
  if(lineArray.length === 0){
    return 'There is nobody waiting to be served!';
  }else{
    var currentCustomer = lineArray.shift();
    return `Currently serving ${currentCustomer}.`;
  }
}
