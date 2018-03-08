function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
  if (arr.length) {
    var curr = arr.shift();
    return `Currently serving ${curr}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr) {
  if (arr.length) {
    var lineStr = "The line is currently:"
    for (var i = 0; i < arr.length; i++) {
      lineStr = lineStr + ` ${i + 1}. ${arr[i]},`
    }
    lineStr = lineStr.substring(0, lineStr.length - 1);
    return lineStr;
  } else {
    return "The line is currently empty.";
  }
}
