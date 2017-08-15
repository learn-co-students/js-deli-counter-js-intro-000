var katzDeliLine = [];

function takeANumber(theArr, name){
  theArr.push(`${name}`);

  return(`Welcome, ${name}. You are number ${theArr.length} in line.`);
}

function nowServing(theArr, name){
  if (theArr.length >= 1) {
    return(`Currently serving ${theArr.shift()}.`)
  }
  else {
    return("There is nobody waiting to be served!")
  }
}

var tempArr = []

function currentLine(theArr){
  for (var i = 0; i < theArr.length; i++) {
    tempArr.push(` `+[i+1]+`. `  + theArr[i])
  }

  if (theArr.length >= 1) {
      return(`The line is currently:` + tempArr);
    }

  // if (theArr.length >= 1) {
  //   return(`The line is currently: ${theArr}`);
  // }
  else {
    return("The line is currently empty.");
  }
}
