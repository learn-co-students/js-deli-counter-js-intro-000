// imagine var katzDeliLine = []; is present

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announce = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
    return announce
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

//for ([initialization]; [condition]; [iteration]) {
//  [loopBody]; }

function currentLine(line) {
  const customer = [];

 if (line.length === 0) {
   return "The line is currently empty."
 } else if (line.length > 0) {
   for (let i = 0; i < line.length; i++) {
     customer.push(` ${i + 1}. ${line[i]}`);
   }
   return `The line is currently:${customer}`
 }


}
