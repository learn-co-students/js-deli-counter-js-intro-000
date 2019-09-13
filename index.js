function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`
}
function nowServing(array){
  if(array.length > 0){
    var name = array[0];
    array.shift();
    return `Currently serving ${name}.`;
  }
  return "There is nobody waiting to be served!";
}
function currentLine(array){
  if(array.length <= 0){
    return "The line is currently empty.";
  }
  var line = "The line is currently: ";
  for (var i = 0; i < array.length; i++) {
    if(i > 0){
      line += ", ";
    }
    line = line + (i + 1) + ". " + array[i];
  }
  return line;
}
