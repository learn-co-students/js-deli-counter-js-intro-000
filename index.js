var otherDeli = [];
function takeANumber(otherDeli, name){
  otherDeli.push(name);
  return `Welcome, ${name}. You are number ${otherDeli.length} in line.`;
}

function nowServing(otherDeli){
  if(otherDeli.length === 0){
    return `There is nobody waiting to be served!`;
  }
  else{
    return `Currently serving ${otherDeli.shift()}.`;
  }
}

function currentLine(otherDeli){
  var array=[];
  if(otherDeli.length === 0){
    return  `The line is currently empty.`;
  }
  else{
    for(let i = 0; i < otherDeli.length; i++){
      array.push(`${i+1}. ${otherDeli[i]} `);
    }
  }
  return `The line is currently: ${array}`;
}
