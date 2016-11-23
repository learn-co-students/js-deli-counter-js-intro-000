var katzDeliLine = [];

function takeANumber(line, name) {
  line[line.length] = name;
  return 'Welcome, ' + name + '. You are number ' + line.length + ' in line.';
}

function nowServing(line) {
  var tempstring = '';
  if (line.length == 0) { return 'There is nobody waiting to be served!'}
  else {
    tempstring =  'Currently serving ' + line[0] + '.';
    line.shift();
    return tempstring;
  }
}

function currentLine(line){
  var linestring = 'The line is currently: ';
  if (line.length == 0) { return 'The line is currently empty.';}
  else {
    for(var i = 0; i<line.length; i++) {
      if(i == line.length - 1) {
        linestring = linestring + (i + 1) + '. ' + line[i];
      } else {
        linestring = linestring + (i + 1) + '. ' + line[i] + ', ';
      }
    }
  }
  return linestring;
}
