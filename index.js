function takeANumber(current, name) {
  var newArray = current;
  newArray.push(name);
  return (`Welcome, ${name}. You are number ${newArray.length} in line.`);
}

function nowServing(current){
  if (current.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${current.shift()}.`;
  }
}

function currentLine(current){
  if (current.length === 0) {
    return `The line is currently empty.`;
  } else {

    //  for (i=0; current.length>0; i++){
       var newArray = [];
       var i;
       var l = current.length;
       for (i=0; i<l; i++) {
       var placeInLine = 1;
       var nameInLine = current[i];
       //var newName = `${placeInLine}. ${current[i]}`
       //newArray = newName.push;
       console.log(nameInLine);
       placeInLine++;
    }
    //return `The line is currently: 1. ${current[0]}, 2. ${current[1]}, 3. ${current[2]}`
  }
}
