var katzDeli = [];

function takeANumber(name) {
  var katzDeliLine = katzDeli.length;
  do{
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine + 1} in line.`;
    katzDeliLine++;
  }
  while (katzDeliLine > 0)
  return katzDeli
  return katzDeliLine
}



function nowServing(array){
  do{
    return `Currently serving ${array[0]}.`;
    array.shift();
  }
  while (array.length > 0);
}



var customers = [];
var i = 0;

function nowServing(array) {
  while (array[i]) {
    return `Currently serving ${array[0]}.`;
    array.shift();
  }
  return "There is nobody waiting to be served!"
}




function nowServing(array) {
  const array = [];
  while (array.length > 0) {
    return `Currently serving ${array[0]}.`;
    return array.shift();
  }
  return "There is nobody waiting to be served!"
}
