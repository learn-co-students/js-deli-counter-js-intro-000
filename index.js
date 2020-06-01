function takeANumber(Line, Name) {
  var index = Line.length
  var len = index + 1
  Line[index] = Name
  return `Welcome, ${Name}. You are number ${len} in line.`
};
function nowServing(Line) {
  if (Line.length > 0){
    return `Currently serving ${Line.shift()}.`
  } else {
    return `There is nobody waiting to be served!`
  };
};
function currentLine(Line) {
  if (Line.length > 0){
    var index = Line.length
    var len = index + 1
    var i = 0
    var newLine = []
    while (i < len - 1) {
      if (i == 0) {
        var x = i + 1
        newLine[i] = `${x}. ${Line[i]}`
        i = i + 1
      } else if (i < Line.length) {
        var x = i + 1
        newLine[i] = ` ${x}. ${Line[i]}`
        i = i + 1
      } else {
      var x = i + 1
      newLine[i] = `${x}. ${Line[i]}`
      i = i + 1
    }
    }
    return `The line is currently: ${newLine}`
  } else {
    return `The line is currently empty.`
  };
};
