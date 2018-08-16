var deliLine = [];

function takeANumber(deliLine, name){
  deliLine.push(name);
  return (`Welcome, ${name}. You are number ${deliLine.length} in line.`)
};

function nowServing(deliLine){
  if (deliLine.length > 0){
    return `Currently serving ${deliLine.shift()}.`
  }
      else {
        return "There is nobody waiting to be served!"
    }
};


function currentLine(deliLine){
  var blank = []
  var n;
  if (deliLine.length > 0){
    for (var n = 0; n < deliLine.length; n ++)
    {
      blank.push(`${n + 1}. ${deliLine[n]}`);
 }
 return 'The line is currently: ' + blank.join(', ');
 }
else {
  return "The line is currently empty."
  }
};
