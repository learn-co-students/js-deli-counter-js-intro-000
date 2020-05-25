// var katzDeli = [];
//
// function takeANumber(katzDeli, name) {
//   katzDeli.push(`${name}`);
//   return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
// }
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
// function nowServing(katzDeliLine){
//     let i = 0;
//     while (i < katzDeliLine.length) {
//       i++;
//     }
//   if (katzDeliLine.length === 0) {
//     return 'There is nobody waiting to be served!';
//       }
//       else {
//         return('Currently serving Steven.');
//       }
//
// }
function nowServing(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}


var line = [];
function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line.splice(0, 3));
}

// var katzDeliLine = [];
//
// function takeANumber(katzDeliLine,name = "Guest") {
//   katzDeliLine.push(name)
//   console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
//   return `Welcome ${name}. You are number ${katzDeliLine.lenght} in line.`
//   console.log("Line is currently empty");
// }
// else {
//   var newLine = [],i;
// for (i = 0; i < line.length; i++) {
//   new.push(` ${i+1}. ${line[i]}`)
// }
// console.log();(`The line is currently:${newLine}`)
//  return `The line is currently:${newLine}`
//  }
// }
