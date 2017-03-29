var katzDeliLine = [];

function takeANumber(array, name) {
  var numArr = array.push(name);
  if(array.length === 1) {
    return "Welcome, " + name + ". " + "You are number 1 in line.";
  }
  var count = 1;
  while(count < array.length) {
  count += array.indexOf(name);
  }

  return "Welcome, " + name + ". " + "You are number " + numArr + " in line.";
}


function nowServing(array) {
  var remove = array.shift();
  if(array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  return "Currently serving " + remove + ".";
  }
}
nowServing(katzDeliLine);

function currentLine(array) {
  if(array.length === 0) {
    return "The line is currently empty.";
  }
  var len = array.length-1;
  var line = 'The line is currently: ';
  for(var i =0; i < len; i++) {
    return line + (i+1) + ". " + array[i] + ", " + (i+2) + ". " + array[i+1] + ", " + (i+3) + ". " + array[i+2];
  }
}
