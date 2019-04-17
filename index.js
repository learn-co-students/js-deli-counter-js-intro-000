function takeANumber(line, name) {
  line.push(`${name}`);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(arr1) {
      if (arr1.length === 0) {
      return 'There is nobody waiting to be served!';
    }
    else {
      var currentName = arr1[0];
      arr1.shift();
      return `Currently serving ${currentName}.`;
    }
  }

function currentLine(line) {
    if (line.length === 0) {
      return 'The line is currently empty.';
    }
    else  {
      var arr3 = []
      for (var i=0; i < line.length; i++) {
        arr3.push(` ${i+1}. ${line[i]}`);
    }
    return 'The line is currently:' + arr3;

    }
}
