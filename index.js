var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;

}

function nowServing(katzDeliLine, name) {
return katzDeliLine.length === 0 ?
"There is nobody waiting to be served!" :
`Currently serving ${katzDeliLine.shift(name)}.`;
}


function currentLine(katzDeliLine) {
 if (!katzDeliLine.length) {
  return "The line is currently empty."
 } else {
   var katzDeli = [];
   for (var i = 0; i < katzDeliLine.length; i++) {
     katzDeli.push(`${i + 1}. ${katzDeliLine[i]}`)
   }
   return `The line is currently: ${katzDeli.join(', ')}`
 }
}
