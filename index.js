var katzDeliLine = []

function takeANumber(array, str) {
  array.push(str);
  return `Welcome, ${str}.  You are number ${array.length} in line.`;
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty"
  } else {
      var result = []
      for (var i = 0; i < array.length; i++) {
        result[i] = (array.indexof(i)+1) + ". " + array[i] + " ";
      }
      return `The line is currently: ${result.join()}`;
  }
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var x = array[0];
    array.shift();
    return `Currently serving ${x}.` ;
  }
}
