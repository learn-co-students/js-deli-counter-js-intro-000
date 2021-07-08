var katzDeliLine = [];
function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if(array.length > 0) {
    return `Currently serving ${array.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(array){
  if(array.length > 0){
    var str = "The line is currently: ";
      for(var i = 0; i < array.length; i++){
        str += `${i + 1}. ${array[i]}${i < array.length - 1 ? ', ' : ''}`;
      }
      return str;
  } else {
    return "The line is currently empty.";
  }
}
