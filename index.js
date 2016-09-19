var katzDeli = [];

function takeANumber(arr, newName) {
// var placeInLine = arr.push(newName);

  return `Welcome, ${newName}. You are number ${arr.push(newName)} in line.`;
}

function nowServing(line) {
  console.log(katzDeli);

  if (!line.length) return 'There is nobody waiting to be served!';

  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.';
  }
  var lineInfo = '';
  var i = 0;
  var lineLen = line.length;

  do {
    lineInfo +=
      ((i === 0) ? 'The line is currently: ' : ', ')
      + `${i + 1}. ${line[i]}`;
    i += 1;
  } while (i < lineLen);

  return lineInfo;
}
