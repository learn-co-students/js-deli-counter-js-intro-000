var katzDeli = [];

var takeANumber = function(array, newName) {
  array.push(newName);
  return `Welcome, ${newName}. You are number ${array.length} in line.`
}

var nowServing = function(array) {
  if ( array.length > 0 ) {
    return `Currently serving ${array.shift()}.`;
    return array;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

var currentLine = function(line) {
  if (line.length > 0) {
    var output = '';
    for (var i = 0, lineLen = line.length - 1; i < lineLen; i++) {
      var num = i + 1;
      var val = line[i];
      output += `${num}. ${val}, `
    }
    var lastNum = line.length;
    output += `${lastNum}. ${line[lastNum - 1]}`;
    return `The line is currently: ${output}`
  } else {
    return `The line is currently empty.`
  }
}
