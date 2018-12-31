var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

/*function currentLine(katzDeliLine){
  var i = katzDeliLine.length;
for (i=0; i<=katzDeliLine.length; i++){
  if (katzDeliLine = 0){
    return "The line is currently empty."
  }
  else {
    return `The line is currently: ${katzDeliLine[i]}`}
}*/

function currentLine(katzDeliLine) {
  let i = 0;
  var line = []
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}

//WORKS:::::

// function currentLine(katzDeli) {
//
//   for (let i = 0; i < katzDeli.length; i++) {
//     line.push(` `+[i+1]+`. `  + katzDeli[i])
//   }
//   return(`The line is currently:` + line);
// }
