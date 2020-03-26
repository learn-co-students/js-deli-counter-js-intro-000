function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    var firstInLine = array.slice(0,1);
    array.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  } else {
      var message = `The line is currently: 1. ${array[0]}`
      for (let i = 1; i < array.length; i++) {
        var messageNew = `${message}, ${i + 1}. ${array[i]}`;
        var message = messageNew;
      }
      return message;
    }
  }
