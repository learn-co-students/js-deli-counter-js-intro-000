var katzDeli = [];

function takeANumber(katzDeli, name){

  katzDeli.push(name);

  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli){
  if (katzDeli.length > 0 ){
  return `Currently serving ${katzDeli.shift()}.`;
  }
  else {

    return "There is nobody waiting to be served!"
  }
  katzDeli.shift();
}

function currentLine(katzDeli){
  if (katzDeli.length > 0){
    var line = katzDeli
    return `The line is currently: 1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}`
  }
  else {
    return "The line is currently empty."
  }
}
