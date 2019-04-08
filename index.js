// adds a name to the end of an array and returns a string
function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.indexOf(name) + 1} in line.`;
}

// returns the first name in an array and removes it from the array, or notifies if array is empty
function nowServing(array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

// returns the elements of an array in a string, or notifies if array is empty
function currentLine(array) {
  if (array.length > 0) {
    let line = `The line is currently: 1. ${array[0]}`;
    for (let i = 1; i < array.length; i++) {
      line = `${line}, ${i + 1}. ${array[i]}`;
    }
    return line;
  } else {
    return 'The line is currently empty.';
  }
}
