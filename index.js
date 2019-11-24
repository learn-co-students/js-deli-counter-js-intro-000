function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`;
}
function nowServing(arr) {
  var msg;
  if (arr.length === 0) {
    msg = `There is nobody waiting to be served!`;
     return msg;
  } else {
    msg = `Currently serving ${arr[0]}.`;
    arr.shift();
    return msg;
  }
}
function currentLine(line) {
  var msg;
  if (line.length === 0 ) {
  msg = `The line is currently empty.`;
  return msg;
  }else {
    msg = `The line is currently: `
    for (var i = 0; i < line.length; i++) {
      var comma = (i !== (line.length - 1))? ", ": "";
      msg += `${i+1}. ${line[i]}${comma}`;
    }
    return msg
  }
}
