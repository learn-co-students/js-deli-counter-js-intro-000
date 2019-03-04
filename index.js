var name;

function takeANumber(line, name){
  line.push(name);
  var position = line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line){
  if (line.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else if (line.length > 0){
    var serving = line.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line){
  var position;
  var name;
  var lineString = 'The line is currently: ';
  var i;

  if (line.length > 0){
    for (i = 0; i < line.length; i++){ // for each person in line, add their position (index + 1) and name to a string
      position = i + 1;
      name = line[i];
      lineString = lineString + `${position}. ${name}` + ', ';
    }
    return lineString.substring(0, lineString.length - 2);
  }
  else if (line.length === 0){
    return 'The line is currently empty.';
  }
}

// The line is currently: ${i + 1}. ${line[i]},
