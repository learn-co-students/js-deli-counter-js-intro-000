function takeANumber(array, customer){
  array.push(customer);
  return (`Welcome, ${customer}. You are number ${array.length} in line.`);
}
function nowServing (array){
  if (array && array.length >=1){ var placeHolder = [array[0]];
  array.shift();
    return(`Currently serving ${placeHolder[0]}.`);
  } else return "There is nobody waiting to be served!";
}
function currentLine(array){
  var placeHolder = [];
    if (array.length >= 1) {
      while (array.length >= 1){
    placeHolder.unshift(` ${array.length}. ${array[array.length - 1]}`);
    array.pop();
  }return `The line is currently:${placeHolder}`}
  else if (array.length === 0) {return `The line is currently empty.`}
}