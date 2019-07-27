function takeANumber(array, name){
  var num = array.length + 1;
  array.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(array){
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else{
    var customer = array.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var customerAndNumber=[];
    for(var i = 0; i < line.length; i++){
      customerAndNumber.push(i+1 + ". " + line[i]);
    }
    return "The line is currently: " + customerAndNumber.join(", ");
  }
}
