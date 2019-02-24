function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  var first = array.shift();
  if (array.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${first}.`;
  }
  return array;
}

function currentLine(array) {
  var text = "The line is currently:";

  if (array.length == 0) {
    return "The line is currently empty.";
  }

  for (let i = 0; i < array.length; i++) {
    text += ` ${i + 1}. ${array[i]}`;

    if(i != array.length - 1) {
      text += ",";
    }
  }

  return text;
}
