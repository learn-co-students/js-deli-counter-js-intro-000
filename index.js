var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  var first = katzDeli[0]
  if(katzDeli.length > 0){
    katzDeli.shift();
    return `Currently serving ${first}.`;
  } 
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli){
  var orderedList = [];
  if(katzDeli.length === 0){
    return "The line is currently empty.";
  }
  else{
    for(var i = 0; i < katzDeli.length; i++){
      orderedList.push(` ${i+1}. ${katzDeli[i]}`);
    }
  }
  return "The line is currently:" + orderedList.toString();
}

