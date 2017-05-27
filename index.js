var katzDeliLine = [];

function takeANumber(katzDeliLine, customer) {
  //adds customer (a string) to the line at katzdeli (an array, katzDeliLine),
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  //erves first customer in line and removes them from the line, if no one is in line returns "There is nobdy waiting to be served!"
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  //returns the current line
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var result = 'The line is currently:'
    for (var i = 0; i < katzDeliLine.length; i++) {
      result += ` ${i+1}. ${katzDeliLine[i]},`;
    }
    result = result.substring(0,result.length-1);
  }
  return result;
}