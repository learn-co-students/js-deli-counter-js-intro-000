var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if(array.length > 0) {
    return `Currently serving ${array.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  var string = "The line is currently: ";
  if(array.length >0) {
    for(let i=0; i < array.length - 1; i++) {
    string += `${i+1}. ${array[i]}, `;
  }
   string += `${array.length}. ${array.slice(-1)}`;
   return string
} else {
  return "The line is currently empty."
}
}
